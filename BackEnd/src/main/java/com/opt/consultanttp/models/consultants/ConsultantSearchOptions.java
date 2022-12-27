package com.opt.consultanttp.models.consultants;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ConsultantSearchOptions {
    private String name;
    private String phone;
    private String email;
    private String pole;
    private Date date_admission;
}
