import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './sales.reducer';
import { ISales } from 'app/shared/model/sales.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';
import Icon from '@material-ui/core/Icon';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MButton from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Container from '@material-ui/core/Container';

export interface ISalesDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> { }

export const SalesDetail = (props: ISalesDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
    }),
  );
  const classes = useStyles();
  const { salesEntity } = props;
  return (
    <Container maxWidth="sm" fixed>
      <h2>
        <Translate contentKey="testApp.sales.detail.title">Sales</Translate> N°<b>{salesEntity.id}</b>
      </h2>
      <dl className="jh-entity-details">
        <dt>
          <span id="description">
            <Translate contentKey="testApp.sales.description">Description</Translate>
          </span>
        </dt>
        <dd>{salesEntity.description}</dd>
        <dt>
          <span id="state">
            <Translate contentKey="testApp.sales.state">State</Translate>
          </span>
        </dt>
        <dd>{salesEntity.state}</dd>
        <dt>
          <span id="date">
            <Translate contentKey="testApp.sales.date">Date</Translate>
          </span>
        </dt>
        <dd>{salesEntity.date ? <TextFormat value={salesEntity.date} type="date" format={APP_LOCAL_DATE_FORMAT} /> : null}</dd>
      </dl>
      <MButton onClick={() => { window.location.replace(`/sales`) }}
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<ArrowBackIcon />}
      >
        Back
        </MButton>
      {/*<Button tag={Link} to="/sales" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>*/}
        &nbsp;
      <MButton onClick={() => { window.location.replace(`/sales/${salesEntity.id}/edit`) }}
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<EditIcon />}
      >
        Editar
        </MButton>
      {/*<Button tag={Link} to={`/sales/${salesEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>*/}
    </Container>
  );
};

const mapStateToProps = ({ sales }: IRootState) => ({
  salesEntity: sales.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SalesDetail);
