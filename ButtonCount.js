class ButtonCount extends HTMLElement {
    constructor() {
      super();
      this.count = 0;
  
      // Create a shadow root
      this.attachShadow({ mode: 'open' });
  
      // Create a button element
      const button = document.createElement('button');
      button.textContent = `Times Clicked: ${this.count}`;
  
      // Add a click event listener to the button
      button.addEventListener('click', () => {
        this.count++;
        button.textContent = `Times Clicked: ${this.count}`;
      });
  
      // Add the button to the shadow root
      this.shadowRoot.appendChild(button);
    }
  }
  
  customElements.define('button-count', ButtonCount);
  