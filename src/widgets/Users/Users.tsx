"use client";
import style from "./Users.module.css";
import { Row, Col, Pagination } from "antd";
import { useUsers } from "./lib/hook";
import { observer } from "mobx-react-lite";
import { Card } from "@/shared";
import { useContext } from "react";
import { Context } from "./lib/context";
import Link from "next/link";

export const Users = observer(() => {
    const large = { span: 6 };
    const middle = { span: 8 };
    const small = { span: 12 };
    const xsmall = { span: 12 };
    const data = useUsers();

    const { store } = useContext(Context);

    return (
        <div className={style.container}>
            <Row gutter={[16, 16]}>
                {data.users?.map((a, i) => (
                    <Col xs={xsmall} sm={small} md={middle} lg={large} key={i}>
                        <Link
                            href={
                                data.myId == a.id
                                    ? "/profile"
                                    : `/users/${a.id}`
                            }
                        >
                            <Card
                                loading={false}
                                src={a.avatar}
                                title={a.name}
                                subtitle={a.science_degree}
                            />
                        </Link>
                    </Col>
                ))}
            </Row>
            <Pagination
                className={style.pagination}
                defaultCurrent={data.page}
                total={data.pageCount ? data.pageCount * 10 : 0}
                disabled={data.pageCount == null}
                onChange={(e) => {
                    store.page = Number(e);
                }}
            />
        </div>
    );
});
