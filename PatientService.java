package com.hospitalmanagementsystem.hospitalmanagement.service;

import com.hospitalmanagementsystem.hospitalmanagement.exception.ResourceNotFoundException;
import com.hospitalmanagementsystem.hospitalmanagement.model.Appointment;
import com.hospitalmanagementsystem.hospitalmanagement.model.Patient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Map;

public interface PatientService {
    public Patient savePatient(Patient patient);
    public List<Patient> getAllPatients();
    public ResponseEntity<Patient> updatePatient(int id, Patient patientDetails);
    public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable int id);
    public ResponseEntity<Patient> getPatientById(@PathVariable int id);
    public Appointment saveAppointment(Appointment appointment);
    public List<Appointment> getAllAppointments();
}
