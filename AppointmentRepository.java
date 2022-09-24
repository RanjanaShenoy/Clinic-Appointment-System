package com.hospitalmanagementsystem.hospitalmanagement.repository;

import com.hospitalmanagementsystem.hospitalmanagement.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Integer> {

}
