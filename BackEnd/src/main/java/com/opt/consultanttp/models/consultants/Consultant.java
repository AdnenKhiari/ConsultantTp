package com.opt.consultanttp.models.consultants;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("consultants")
public class Consultant {
    @Id
    private String id;
    private String name;
    private String phone;
    private String email;
    private String pole;
    private Date dateOfAdmission;
}
/*
public class Consultant {
    private String id;
    private String name;
    private String phone;
    private String email;
    private String pole;
    private Date date_admission;

    public Consultant(String id,String name, String phone, String email, String pole, Date date_admission) {
        this.id= id;
        this.name= name;
        this.phone = phone;
        this.email = email;
        this.pole=pole;
        this.date_admission = date_admission;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPole() {
        return pole;
    }

    public void setPole(String pole) {
        this.pole = pole;
    }

    public Date getDate_admission() {
        return date_admission;
    }

    public void setDate_admission(Date date_admission) {
        this.date_admission = date_admission;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
*/