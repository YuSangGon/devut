package com.project.devut.common.entity;

import com.project.devut.portfolio.entity.PortfolioInfo;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "DEVUT_USERS")
@Getter
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class DevutUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_ID")
    private Long userId;

    @Enumerated(EnumType.STRING)
    @Column(name = "USER_DIV", nullable = false)
    private UserDiv userDiv;

    @Column(name = "USER_NAME", nullable = false)
    private String userName;

    @Column(name = "LOGIN_ID", nullable = false)
    private String loginId;

    @Column(name = "PASSWORD", nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "GENDER", nullable = false)
    private Gender gender;

}
