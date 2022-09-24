package com.hospitalmanagementsystem.hospitalmanagement.model;

import javax.persistence.*;

@Entity
@Table(name="patient")
public class Patient{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int serial_no;

    @Column(name="name")
    private String name;

    @Column(name="phone")
    private String phone;

    @Column(name="gen")
    private String gen;

    @Column(name="address")
    private String address;

    @Column(name="email")
    private String email;

    public Patient() {

    }

    public int getSerial_no() {
        return serial_no;
    }

    public void setSerial_no(int serial_no) {
        this.serial_no = serial_no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getGen() {
        return gen;
    }

    public void setGen(String gen) {
        this.gen = gen;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "serial_no=" + serial_no +
                ", name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", gen='" + gen + '\'' +
                ", address='" + address + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
