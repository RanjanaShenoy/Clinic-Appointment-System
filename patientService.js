import axios from 'axios';

const PATIENT_API_BASE_URL = "http://localhost:8080/api/v1/patients";

class patientService {
   
   
    updatePatient(patient, patientId){
        return axios.put(PATIENT_API_BASE_URL + '/' + patientId, patient,{headers: {'Content-Type': 'application/json'}},{body:JSON.stringify(patient)});
    }

    deletePatient(patientId){
        return axios.delete(PATIENT_API_BASE_URL + '/' + patientId);
    }

    getPatientById(patientId){
        return axios.get(PATIENT_API_BASE_URL + '/' + patientId);
    }

    

}

export default new patientService()