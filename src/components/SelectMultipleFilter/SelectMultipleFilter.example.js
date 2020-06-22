import React from 'react';
import { withRouter } from 'react-router-dom';
import SelectMultipleFilter from './SelectMultipleFilter';
import { stringify, parse } from '../../util/urlHelpers';

const URL_PARAM = 'pub_musicStyles';

const options = [
  { key: 'ashtanga', label: 'Ashtanga' },
  { key: 'hatha', label: 'Hatha' },
  { key: 'kundalini', label: 'Kundalini' },
  { key: 'restorative', label: 'Restorative' },
  { key: 'vinyasa', label: 'Vinyasa' },
  { key: 'yin', label: 'yin' },
];

const handleSubmit = (values, history) => {
  console.log('Submitting values', values);
  const queryParams = values ? `?${stringify(values)}` : '';
  history.push(`${window.location.pathname}${queryParams}`);
};

const musicStylesFilterPopup = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const musicStyles = params[URL_PARAM];
  const initialValues = { [URL_PARAM]: !!musicStyles ? musicStyles : null };

  return (
    <SelectMultipleFilter
      id="SelectMultipleFilterPopupExample"
      name="musicStyles"
      queryParamNames={[URL_PARAM]}
      label="musicStyles"
      onSubmit={values => handleSubmit(values, history)}
      showAsPopup={true}
      liveEdit={false}
      options={options}
      initialValues={initialValues}
      contentPlacementOffset={-14}
    />
  );
});

export const musicStylesFilterPopupExample = {
  component: musicStylesFilterPopup,
  props: {},
  group: 'filters',
};

const musicStylesFilterPlain = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const musicStyles = params[URL_PARAM];
  const initialValues = { [URL_PARAM]: !!musicStyles ? musicStyles : null };

  return (
    <SelectMultipleFilter
      id="SelectMultipleFilterPlainExample"
      name="musicStyles"
      queryParamNames={[URL_PARAM]}
      label="musicStyles"
      onSubmit={values => {
        handleSubmit(values, history);
      }}
      showAsPopup={false}
      liveEdit={true}
      options={options}
      initialValues={initialValues}
    />
  );
});

export const musicStylesFilterPlainExample = {
  component: musicStylesFilterPlain,
  props: {},
  group: 'filters',
};
