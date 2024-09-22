insert into devut_users (user_div, user_name, login_id, password, gender)
values ( 'USER', 'USER1', 'test', '1234', 'MALE' );

insert into portfolio_info(user_id) values ( 1 );

insert into project_info(
    portfolio_id,
    project_title,
    project_link,
    project_description,
    languages,
    upload_order,
    project_started_at,
    project_ended_at,
    used_yn
)
values ( 1, 'project1', 'https://www.naver.com', '네이버 프로젝트', 'JAVA, POSTGRESQL', 1, '2024-09-10', '2024-12-10', true ),
( 1, 'project2', 'https://www.google.com', '구글 프로젝트', 'Nodejs, MySQL', 2, '2024-09-10', '2024-12-10', false );

insert into profile_info (
    profile_career,
    profile_user_age,
    protfolio_id,
    profile_languages,
    profile_pr,
    profile_url,
    user_mobile,
    user_name
)
values ( 2, 26, 1, 'java', 'test', 'https://www.naver.com', '010-1233-1234', 'test' );