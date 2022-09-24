package com.hospitalmanagementsystem.hospitalmanagement.controller;


import com.hospitalmanagementsystem.hospitalmanagement.exception.ResourceNotFoundException;
import com.hospitalmanagementsystem.hospitalmanagement.model.Appointment;
import com.hospitalmanagementsystem.hospitalmanagement.model.Patient;
import com.hospitalmanagementsystem.hospitalmanagement.repository.AppointmentRepository;
import com.hospitalmanagementsystem.hospitalmanagement.repository.PatientRepository;
import com.hospitalmanagementsystem.hospitalmanagement.service.AppointmentService;
import com.hospitalmanagementsystem.hospitalmanagement.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//@CrossOrigin(origins= "http://localhost:3000", allowedHeaders = "*")
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class PatientController {


    @Autowired
    private PatientService patientService;

    @Autowired
    private AppointmentService appointmentService;


    @PostMapping("/patients")
    public String add(@RequestBody Patient patient)
    {
        //System.out.println("hit");
        patientService.savePatient(patient);
        return "Patient Added Successfully!!";
    }

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;

    //get all patients
    @GetMapping("/patients")
    public List<Patient> getAllPatients()
    {
        //return patientRepository.findAll();
        return patientService.getAllPatients();
    }


    @PutMapping("/patients/{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable int id, @RequestBody Patient patientDetails){
        return patientService.updatePatient(id, patientDetails);

    }

    @DeleteMapping("/patients/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable int id){
        return patientService.deletePatient(id);
    }

    @GetMapping("/patients/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable int id) {

        return patientService.getPatientById(id);
    }

    @PostMapping("/appointment")
    public String addAppointment(@RequestBody Appointment appointment)
    {
        //System.out.println("hit");
        patientService.saveAppointment(appointment);
        return "Appointment Added Successfully!!";
    }

    @GetMapping("/allappointments")
    public List<Appointment> getAllAppointments()
    {
        //return patientRepository.findAll();
        return patientService.getAllAppointments();
    }
}
