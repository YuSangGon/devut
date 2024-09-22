package com.project.devut.portfolio.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "PROFILE_ADD_INFO")
@Getter
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class ProfileAddInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PROFILE_ADD_INFO_ID")
    private Long id;

    @Column(name = "PROFILE_FILED_NAME")
    private String profileFiledName;

    @Column(name = "PROFILE_FILED_TYPE")
    private String profileFiledType;

    @Column(name = "PROFILE_FILED_VALUE")
    private String profileFiledValue;

    @Column(name = "PROFILE_INFO_ID")
    private Long profileInfoId;
}
