class Pixabay {
  constructor() {
    this.api_key="13813259-c16425173d3f90ffb2790201d";
  }

  async getPics(key) {
    const keyResponse = await fetch(`https://pixabay.com/api/?q=${key}&key=${this.api_key}`);

    const Data = await keyResponse.json();
    return {
      Data
    }
  }
}