# Requirements for Badgemania

## Product Description

The product is a web application that helps students, from elementary to high school, to increase their motivation in school.
To increase their motivation, they will be given digital badges for the tasks that they complete.
The teacher specifices the tasks in the applikation and decides when a task is completed.
So the applikation is bringing gamification to the classroom and the learning process.

## Functional Requirements

- if no user is logged in
  -  Start page (Home page) with a presentation of the product.
  -  Solutions page with info about different solutions for different type of users like students, teachers and school admin.
  -  Pricing page with info about different packages that has different amount of teachers and student accounts.
  -  About page with info about Badgemania and what it does.
  -  Contact page with information about how to get in touch with us.
  -  Sign in page where different users can sign in.
- if teacher is the logged in user
  - Navigation bar with Home, Students, Badgegroups, Badges, Contact us
  - Home page with info on Badgemania
  - Student page with list of students in the school
  - Badgegroup page with list of Badgegroups that the teacher has created
    - Create a new Badgegroup
    - Badgegroup
      - Students
        - Add student to Badgegroup
        - List of students
        - Delete student from Badgegroup
      - Badges
        - Add Badge to Badgegroup
        - List of Badges
        - Delete Badge from Badgegroup
        - Update Badge in Bagegroup
  - Badges page with all created badges
  - Contact page with information about how to get in touch with us.
- if student is the user
  - Navigation bar with Home, Badgebag, Badgegroups, Contact us
  - Home page with info on Badgemania
  - Badgebag page with all badges that the student have
  - Badgegroups page with all groups the student belongs to
  - Contact page with information about how to get in touch with us.
- if school admin is the user
  - Navigation bar with Home, students, teachers, Contact us
  - Home page with info on Badgemania
  - Student page with list of students in the school
    - Create a student
    - Remove a student
    - Update a student
  - Teacher page with list of teachers in the school
    - Create a teacher
    - Remove a teacher
    - Update a teacher
  - Contact page with information about how to get in touch with us.
- if super admin is the user
  - Navigation bar with Home, Schools, Contact us
  - Home page with info on Badgemania
  - School page with list of schools in the application
    - Create a school
    - Remove a school
    - Update a school
