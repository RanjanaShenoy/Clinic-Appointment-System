package com.hospitalmanagementsystem.hospitalmanagement.model;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="ap_id")
    private int ap_id;

    @Column(name="p_sno")
    private int p_sno;

    @Column(name="p_name")
    private String p_name;

    @Column(name="doctor_name")
    private String doctor_name;

    @Column(name="p_datetime")
    private LocalDateTime p_datetime;

    public Appointment(){

    }

    public int getAp_id() {
        return ap_id;
    }

    public void setAp_id(int ap_id) {
        this.ap_id = ap_id;
    }

    public int getP_sno() {
        return p_sno;
    }

    public void setP_sno(int p_sno) {
        this.p_sno = p_sno;
    }

    public String getP_name() {
        return p_name;
    }

    public void setP_name(String p_name) {
        this.p_name = p_name;
    }

    public String getDoctor_name() {
        return doctor_name;
    }

    public void setDoctor_name(String doctor_name) {
        this.doctor_name = doctor_name;
    }

    public LocalDateTime getP_datetime() {
        return p_datetime;
    }

    public void setP_datetime(LocalDateTime p_datetime) {
        this.p_datetime = p_datetime;
    }

    @Override
    public String toString() {
        return "Appointment{" +
                "ap_id=" + ap_id +
                ", p_sno=" + p_sno +
                ", p_name='" + p_name + '\'' +
                ", doctor_name='" + doctor_name + '\'' +
                ", p_datetime=" + p_datetime +
                '}';
    }
}
