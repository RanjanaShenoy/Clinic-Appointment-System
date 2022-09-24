package com.hospitalmanagementsystem.hospitalmanagement.service;

import com.hospitalmanagementsystem.hospitalmanagement.model.Appointment;

import java.util.List;

public interface AppointmentService {

    public Appointment saveAppointment(Appointment appointment) ;
    public List<Appointment> getAllAppointments();

}
