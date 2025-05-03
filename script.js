let appointments = [];
    const appointmentList = document.getElementById('appointmentList');

    function bookAppointment() {
      const name = document.getElementById('name').value;
      const date = document.getElementById('date').value;

      if (!name || !date) return;

      const appointmentDate = new Date(date);
      const appointment = { name, date: appointmentDate };
      appointments.push(appointment);
      appointments.sort((a, b) => a.date - b.date);

      
      document.getElementById('name').value = '';
      document.getElementById('date').value = '';

     
      updateAppointmentList();
    }

    function updateAppointmentList() {
    appointmentList.innerHTML = '';

      if (appointments.length === 0) {
        appointmentList.innerHTML = '<li class="no-appointments">No appointments booked yet.</li>';
      } else {
        
        appointments.forEach(appt => {
          const appointmentItem = document.createElement('li');
          appointmentItem.classList.add('appointment-item');

          const appointmentDetails = `
            <p>${appt.name} - ${appt.date.toDateString()}</p>
          `;
          appointmentItem.innerHTML = appointmentDetails;

          appointmentList.appendChild(appointmentItem);
        });
      }
    }