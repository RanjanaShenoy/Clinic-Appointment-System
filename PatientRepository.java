package com.hospitalmanagementsystem.hospitalmanagement.repository;

import com.hospitalmanagementsystem.hospitalmanagement.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {

}
