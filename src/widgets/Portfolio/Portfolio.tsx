"use client";
import style from "./Portfolio.module.css";
import { Row, Col, Pagination } from "antd";
import { usePortfolio } from "./lib/hook";
import { observer } from "mobx-react-lite";
import { Card } from "@/shared";
import { useContext } from "react";
import { Context } from "./lib/context";
import Link from "next/link";


export const Portfolio = observer(() => {
    const large = { span: 6 };
    const middle = { span: 8 };
    const small = { span: 12 };
    const xsmall = { span: 12 };
    const data = usePortfolio();

    const { store } = useContext(Context);
    return (
        <div className={style.container}>
            <Row gutter={[16, 16]}>
                {data.portfolio?.map((a, i) => (
                    <Col xs={xsmall} sm={small} md={middle} lg={large} key={i}>
                        <Link href={`/users/${a.id}`}>
                            <Card
                                loading={false}
                                src={a.image}
                                title={a.title}
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
