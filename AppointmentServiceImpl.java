package com.hospitalmanagementsystem.hospitalmanagement.service;

import com.hospitalmanagementsystem.hospitalmanagement.model.Appointment;
import com.hospitalmanagementsystem.hospitalmanagement.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Override
    public Appointment saveAppointment(Appointment appointment) {

//            System.out.println("Appointment Service Impl");
//            System.out.println(appointment.getAp_id());
//            System.out.println(appointment.getP_sno());
//            System.out.println(appointment.getP_name());
//            System.out.println(appointment.getDoctor_name());
//            System.out.println(appointment.getP_datetime());
//
//
//            System.out.println("--------");
        System.out.println(appointmentRepository.save(appointment));
        return appointmentRepository.save(appointment);

    }

    @Override
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }



}
