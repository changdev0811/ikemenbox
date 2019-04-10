import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  }
});


class Footer extends Component {

  constructor() {
    super()
    this.state = {
    }

  }

  componentDidMount() {
  }

  render() {

    return (
        <div>
        {/* Footer */}
        <footer className={styles.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            IKEMENビル公式サイト 2019
          </Typography>
        </footer>
        {/* End footer */}
        </div>
    );

  }
}

export default Footer;
