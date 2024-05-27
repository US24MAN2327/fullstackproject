const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://anasmalik2500:anas2500@virtualwellness.zkubuvt.mongodb.net/healthcare?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  patientNumber: String,
  patientGender: String,
  appointmentTime: Date,
  preferredMode: String,
  selectedDoctor: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3001', // Replace with your frontend application's origin
  credentials: false // Allow credentials such as cookies to be sent with the request
}));

app.post('/appointments', async (req, res) => {
  try {
    console.log('Received appointment submission:', req.body);
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    console.log('Appointment saved successfully');
    res.status(201).send('Appointment saved successfully');
  } catch (error) {
    console.error('Error saving appointment:', error);
    res.status(500).send(`Error saving appointment: ${error.message}`);
  }
});

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});