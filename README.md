# FABO-website - User Manual

## 1. **GitHub** - Changes and their upload

**_GitHub_** is a web-based platform for software developers built on the Git version control system. It allows teams to store, track, and collaborate on code.


### 1.1. Rewriting the website text

In the **_GitHub_** project folder, under the **<> Code** tab, in the **fabo-website/public/locales** folder, you will find the two **translation.json** files in the German (de) and English (en) folders, which contain the website text.

<img width="934" height="386" alt="image" src="https://github.com/user-attachments/assets/a911631d-1ea8-4e7d-8f4e-f4843370312d" />

After opening these, you can edit the text file by selecting the **Edit this file** (pen icon) option. 

**Important**: **The blue texts after the colons are the website texts**, they must be changed (not the green ones)!

<img width="945" height="279" alt="image" src="https://github.com/user-attachments/assets/d56d0457-7801-4aaf-9f88-cc2f747df01e" />


### 1.2. Uploading changes

After rewriting the texts, you can upload the changes by clicking the **Commit changes** button in the top right.

<img width="945" height="298" alt="image" src="https://github.com/user-attachments/assets/3b7425eb-7b77-4185-b0da-22a291683bd4" />

By clicking the **Commit changes** button, the following window will appear:

<img width="945" height="427" alt="image" src="https://github.com/user-attachments/assets/45fb5201-9d0b-4352-8c70-b1c05d1bce1f" />

Here, the changes are uploaded by pressing the **Commit changes** button.

(In the **Commit message** section, you can change the default message to one that better describes the changes, but you don't have to.)


### 1.3. Viewing changes in text files

Commits and changes can be viewed by clicking the **Commits** button under the **<> Code** tab.

<img width="945" height="361" alt="image" src="https://github.com/user-attachments/assets/10088fe3-1a7d-423f-97a8-59a66f7bfaaa" />

By clicking on a **Commit**, you can see which files have been modified and what the changes were:

<img width="945" height="206" alt="image" src="https://github.com/user-attachments/assets/6ed1a2d4-1f8a-4130-a5c5-64d37ed3ee0b" />

By entering the folder of the given commit, the details are visible:

<img width="945" height="310" alt="image" src="https://github.com/user-attachments/assets/dbc45fdb-badc-423b-ac76-db61597a17d6" />


### 1.4. Viewing the website

You can open the website by clicking on the website link in the **About** section on the right side of the **_GitHub_** project folder under the **<> Code** tab.

<img width="945" height="249" alt="image" src="https://github.com/user-attachments/assets/91a848c2-15f9-4c68-9de1-f0a9c8c3dade" />



## 2. **Vercel** – Website hosting

**_Vercel_** is a cloud-based platform mainly used for hosting and deploying web applications and static websites.

Changes uploaded to a **_GitHub_** project are automatically uploaded to the **_Vercel_** project, to verify this you need to check if the last Commit hash on GitHub and Vercel match:

<img width="945" height="249" alt="image" src="https://github.com/user-attachments/assets/96d54eea-ffbd-43b8-9893-08ccded3b4a2" />

<img width="861" height="422" alt="image" src="https://github.com/user-attachments/assets/21bd48d6-b41e-46b4-a7f4-9aecf064e38e" />



## 3. **Formspree** – Contact form management

**_Formspree_** is an online service that allows you to easily manage forms on websites without having to write your own server-side code.

Using it, after filling out the form, the entered data is automatically sent to the specified email address in the form of an email, like this:

<img width="945" height="489" alt="image" src="https://github.com/user-attachments/assets/ee66b5ce-4196-4946-9bbe-f8204f1008a8" />

**To change the destination email address:**

• under the **Settings** tab of the **_Formspree_** project:

<img width="945" height="359" alt="image" src="https://github.com/user-attachments/assets/8169b178-e60b-4b20-8fef-83c1af21add6" />

• by clicking on the **account page** link in the **Target Email** section:

<img width="945" height="306" alt="image" src="https://github.com/user-attachments/assets/9459ba2d-1d49-4f35-bfc7-8bf596317301" />

• in the **Linked Emails** section, click the **Add Email** button to add a new email to the list of options:

<img width="945" height="347" alt="image" src="https://github.com/user-attachments/assets/82e0f212-2067-487f-9e02-0ca0735fe3fb" />

• after verification in the email, you can set the new email address under the **Settings** tab of the **_Formspree_** project:

<img width="945" height="326" alt="image" src="https://github.com/user-attachments/assets/5189040e-07ab-4f92-9b46-f9d48072a802" />

The form submissions will then be sent to the new email address.

**Important**: with the basic plan, **_Formspree_** **only allows two email addresses at a time**, but the second email address added can be replaced.
