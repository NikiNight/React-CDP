import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
        this.setState({ 
            hasError: true 
        });
    }
  
    render() {
      if (this.state.hasError) {
        return <div className="wrapper wrapper_error"><h1>Something went wrong.</h1></div>;
      }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary;