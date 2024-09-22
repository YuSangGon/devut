package com.project.devut.portfolio.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.util.List;

@Entity
@Table(name = "PROFILE_INFO")
@Getter
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class ProfileInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PROFILE_INFO_ID")
    private Long id;

    @Column(name = "USER_NAME", nullable = false)
    private String userName;

    @Column(name = "PROFILE_USER_AGE")
    private Integer profileUserAge;

    @Column(name = "PROFILE_CAREER")
    private Integer profileCareer;

    @Column(name = "PROFILE_LANGUAGES")
    private String profileLanguages;

    @Column(name = "USER_MOBILE")
    private String userMobile;

    @Column(name = "PROFILE_PR")
    private String profilePr;

    @Column(name = "PROFILE_URL")
    private String profileUrl;

    @OneToOne
    @JoinColumn(name = "PROTFOLIO_ID")
    private PortfolioInfo portfolioInfo;

    @OneToMany
    @JoinColumn(name = "PROFILE_INFO_ID") // fk 연결(자동으로 생성을 방지하기 위함)
    private List<ProfileAddInfo> profileAddInfo; // one to many 이기 때문에 list에 담아줘야함
}
