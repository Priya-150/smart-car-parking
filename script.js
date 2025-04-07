import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const db = getDatabase();
const slots = ['slot1', 'slot2', 'slot3', 'slot4'];

window.onload = () => {
  updateUI();
};

function updateUI() {
  let freeCount = 0;
  slots.forEach(slot => {
    const slotRef = ref(db, 'slots/' + slot);
    onValue(slotRef, snapshot => {
      const booked = snapshot.val();
      const slotDiv = document.getElementById(slot);
      if (booked) {
        slotDiv.classList.add('booked');
      } else {
        slotDiv.classList.remove('booked');
        freeCount++;
      }
      document.getElementById('freeCounter').innerText = freeCount;
    });
  });

  onValue(ref(db, 'logs'), snapshot => {
    const logs = snapshot.val();
    const logList = document.getElementById('logList');
    logList.innerHTML = '';
    for (const id in logs) {
      const log = logs[id];
      const li = document.createElement('li');
      li.textContent = `${log.slot} booked at ${log.time}`;
      logList.appendChild(li);
    }
  });
}

window.toggleSlot = function (slotId) {
  const slotRef = ref(db, 'slots/' + slotId);
  onValue(slotRef, snapshot => {
    const booked = snapshot.val();
    if (!booked) {
      set(slotRef, true);
      const now = new Date();
      document.getElementById('slotInfo').innerText = `${slotId} booked on ${now.toLocaleString()}`;
      const logRef = ref(db, 'logs/' + Date.now());
      set(logRef, { slot: slotId, time: now.toLocaleString() });
    } else {
      alert('Slot already booked');
    }
  }, { onlyOnce: true });
};
