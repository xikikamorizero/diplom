"use client";
import style from "./Users.module.css";
import { Row, Col } from "antd";
import { useUsers } from "./lib/hook";
import { observer } from "mobx-react-lite";
import { Card } from "@/shared";
// import { Card } from "@/entities";

export const Users = observer(() => {
    const large = { span: 6 };
    const middle = { span: 8 };
    const small = { span: 12 };
    const xsmall = { span: 12 };
    const data = useUsers();

    return (
        <div className={style.container}>
            <Row gutter={[16, 16]}>
                {data.users?.map((a: any, i: any) => (
                    <Col xs={xsmall} sm={small} md={middle} lg={large} key={i}>
                        <Card
                            src={a.avatar}
                            name={a.name}
                            specialization={a.science_degree}
                        />
                    </Col>
                ))}
                <Col xs={xsmall} sm={small} md={middle} lg={large}>
                    <Card src={null} name={"tes1"} specialization={"test"} />
                </Col>
                <Col xs={xsmall} sm={small} md={middle} lg={large}>
                    <Card
                        src={
                            "https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg"
                        }
                        name={"tes2"}
                        specialization={"test"}
                    />
                </Col>
                <Col xs={xsmall} sm={small} md={middle} lg={large}>
                    <Card
                        src={
                            "https://s0.rbk.ru/v6_top_pics/media/img/4/04/346843326750044.jpg"
                        }
                        name={"tes3"}
                        specialization={"test"}
                    />
                </Col>
            </Row>
        </div>
    );
});
