package com.hospitalmanagementsystem.hospitalmanagement.service;

import com.hospitalmanagementsystem.hospitalmanagement.exception.ResourceNotFoundException;
import com.hospitalmanagementsystem.hospitalmanagement.model.Appointment;
import com.hospitalmanagementsystem.hospitalmanagement.model.Patient;
import com.hospitalmanagementsystem.hospitalmanagement.repository.AppointmentRepository;
import com.hospitalmanagementsystem.hospitalmanagement.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PatientServiceImpl implements PatientService{

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Override
    public Patient savePatient(Patient patient) {
        System.out.println(patientRepository.save(patient));
        return patientRepository.save(patient);
    }

    @Override
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }


    @Override
    public ResponseEntity<Patient> updatePatient(int id, Patient patientDetails) {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Patient not exist with id :" + id));

        patient.setName(patientDetails.getName());
        patient.setPhone(patientDetails.getPhone());
        patient.setGen(patientDetails.getGen());
        patient.setAddress(patientDetails.getAddress());
        patient.setEmail(patientDetails.getEmail());
        //System.out.println("Patient: "+patient.getGen());


        Patient updatedPatient = patientRepository.save(patient);
        return ResponseEntity.ok(updatedPatient);
    }

    @Override
    public ResponseEntity<Map<String, Boolean>> deletePatient(int id) {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Patient not exist with id :" + id));

        patientRepository.delete(patient);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Patient> getPatientById( int id) {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Patient not exist with id :" + id));
        return ResponseEntity.ok(patient);
    }

    @Override
    public Appointment saveAppointment(Appointment appointment) {
        System.out.println(appointmentRepository.save(appointment));
        return appointmentRepository.save(appointment);
    }

    @Override
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }


}
