import React from 'react';
import { Table } from 'react-bootstrap';
import styles from './ListComponent.module.scss';

export const ListComponent = ({ title, headerArgs, content }) => {
  return (
    <>
      <div className={styles.listContainer}>
        {' '}
        <h3>{title}</h3>
        <Table responsive striped bordered hover className={styles.list}>
          <thead>
            <tr>
              {headerArgs.map((item) => {
                return <th key={item._id}>{item.title}</th>;
              })}
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </Table>
      </div>
    </>
  );
};
