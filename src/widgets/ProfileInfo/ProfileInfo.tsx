"use client";
import { Profile } from "@/entities/Profile/Profile";
import style from "./ProfileInfo.module.css";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Context } from "@/shared/api";
import { useProject } from "./lib/hook";

export const ProfileInfo = observer(() => {
    const data = useProject();
    return (
        <div className={style.container}>
            <Profile
                user={data.profile}
                editMode={data.editMode}
                setEditMode={data.setEditMode}
                name={data.name}
                setName={data.setName}
                description={data.description}
                setDescription={data.setDescription}
                placeOfWork={data.placeOfWork}
                setPlaceOfWork={data.setPlaceOfWork}
                scienceDegree={data.scienceDegree}
                setScienceDegree={data.setScienceDegree}
                contacts={data.contacts}
                setContacts={data.setContacts}
                image={data.image}
                setImage={data.setImage}
                portfolio={data.portfolio}
                course={data.course}
                myProf={true}
                EditProfile={data.EditProfile}
            />
        </div>
    );
});
