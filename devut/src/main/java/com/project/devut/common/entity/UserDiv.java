package com.project.devut.common.entity;

public enum UserDiv {
    USER("USER"),
    ADMIN("ADMIN");

    private final String value;

    UserDiv(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
