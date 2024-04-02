import { useState } from 'react';
import './App.css';
import image from "./image-man-eating.webp";

function App() {

  const [unitType, setUnitType] = useState("metric");

  return (
    <div className="appContainer">
      <div className="heroSection">
        <div className="mainArea">
          <div className="logoBar">
            <div className="logoContainer">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64"><path fill="#B3D3F1" d="M32 2.627c-.543 0-1.094.004-1.634.037a29.466 29.466 0 0 0-3.561.44c-.13.023-.257.049-.386.074-.11.021-.22.032-.33.055-.062.01-.123.024-.184.037-.06.013-.122.023-.184.036a29.34 29.34 0 0 0-1.909.478c-.061.017-.123.037-.184.055-.031.009-.06.027-.091.036-.091.028-.186.046-.276.074-.172.058-.341.126-.514.183-.363.121-.726.233-1.083.368-.044.013-.085.04-.129.055-.54.206-1.073.442-1.597.679-.533.24-1.063.482-1.579.753-.516.272-1.025.56-1.524.863-.023.014-.05.022-.074.036-.473.287-.939.587-1.395.9a29.441 29.441 0 0 0-2.185 1.67c-.267.223-.53.449-.79.68-.047.043-.098.085-.146.129-.277.251-.541.509-.808.77-.037.037-.073.075-.11.11-.365.362-.72.723-1.065 1.103-.209.229-.406.462-.606.697-.2.234-.395.476-.588.716-.389.484-.762.98-1.12 1.488-.229.326-.445.655-.66.99-.022.034-.053.06-.075.093l-.128.202c-.016.025-.039.047-.055.073-.052.084-.097.172-.147.257-.194.328-.384.659-.57.992-.044.081-.101.156-.146.238v.018c-.223.412-.439.826-.643 1.249-.202.42-.386.838-.569 1.267-.051.12-.097.246-.147.367-.11.269-.227.535-.33.808-.057.152-.11.306-.165.459-.044.122-.087.245-.129.367h-.018c-.055.163-.095.332-.147.496-.015.048-.022.099-.036.147-.01.031-.027.06-.037.092-.063.213-.122.427-.183.642v.018c-.01.026-.03.048-.037.074-.022.078-.033.16-.055.239-.068.25-.14.5-.202.752l-.055.22c-.023.098-.034.198-.055.294-.088.39-.168.782-.239 1.175-.01.056-.027.11-.037.166-.006.024-.014.049-.018.073-.057.324-.101.645-.147.973 0 .02-.016.036-.018.056-.017.124-.04.242-.055.367h.018a29.55 29.55 0 0 0-.129 1.248c-.006.043-.014.086-.018.129h-.018c-.02.255-.026.514-.036.771V30.516a29.63 29.63 0 0 0-.037 1.487v.018c0 .5.012.992.036 1.487v.018c.018.369.043.737.074 1.102.01.116.026.232.036.349v.073c.01.11.024.221.037.33.025.223.06.442.091.662.026.184.045.368.074.55l.018.11c.069.429.133.846.22 1.267.095.456.197.912.313 1.36.006.006.014.01.018.017v.019c.108.415.223.822.348 1.23.016.05.04.097.056.147.117.37.238.737.367 1.101.016.044.04.085.055.129.04.109.07.222.11.33.072.19.145.38.22.57.076.19.16.38.24.569.184.439.38.873.587 1.303.177.37.358.741.55 1.102.03.056.062.11.092.165v.018c.168.308.337.598.514.9.064.107.138.206.202.312.159.257.312.516.478.771l.11.165c.149.225.304.44.459.661.067.097.133.197.202.294.107.15.22.293.33.44.16.215.312.434.478.643l.055.074c.089.112.184.22.275.33.046.057.1.109.147.165.13.158.251.323.386.478.148.17.308.329.458.495.143.158.276.323.423.478.014.016.04.021.055.037.162.17.33.33.496.495.112.115.215.238.33.35.074.072.145.148.22.22.148.14.306.269.46.404.13.114.255.234.385.348.009.006.012.013.018.019.109.095.22.181.33.275.165.14.328.286.496.422.269.22.55.433.826.643.056.042.11.087.165.129.036.025.075.047.11.073.33.243.652.486.992.716.344.234.693.46 1.047.68.019.011.036.025.055.036l.091.055c.232.14.463.27.698.404.176.1.355.196.533.294.11.06.218.124.33.183.292.154.584.297.881.44.017.009.038.01.055.02.195.092.391.185.588.274.142.065.28.14.422.203.096.041.196.072.294.11.087.033.17.074.257.11.291.12.585.238.881.349l.202.073.055.018c.013.006.024.014.037.018.304.11.61.212.918.313.085.027.172.046.257.073l.239.073c.153.048.304.103.459.147.262.076.525.153.79.22.388.1.78.192 1.174.276l.166.037c.067.014.134.023.202.036.44.088.875.17 1.322.239.4.06.806.102 1.211.146.044.007.086.015.129.019.11.011.22.026.33.036l.22.018c.281.025.562.039.845.055.08.006.16.015.239.019a33.794 33.794 0 0 0 1.506.036 29.14 29.14 0 0 0 2.974-.147h.036a30.72 30.72 0 0 0 1.744-.239c.087-.014.171-.022.257-.036.111-.02.22-.035.33-.056.36-.066.728-.14 1.084-.22.074-.016.147-.038.22-.055.204-.047.405-.098.606-.147.043-.01.086-.026.129-.036.06-.016.123-.02.183-.037.117-.03.233-.059.349-.091l.312-.092c.174-.05.342-.113.514-.166.128-.039.259-.068.386-.11.012-.005.023-.014.037-.018.313-.103.628-.217.936-.33l.294-.11.33-.13c.39-.152.776-.326 1.157-.495.06-.026.124-.046.184-.073l.165-.074a29.152 29.152 0 0 0 4.517-2.588c.278-.194.554-.385.826-.588l.22-.165c.051-.04.095-.089.147-.129.29-.224.582-.445.863-.68a29.546 29.546 0 0 0 1.818-1.651l.091-.092.055-.055c.3-.3.594-.606.881-.919.03-.031.063-.06.092-.091a29.717 29.717 0 0 0 1.634-1.983 29.276 29.276 0 0 0 1.634-2.369c.035-.056.076-.11.11-.165.1-.163.198-.33.294-.496.133-.22.263-.436.386-.66.01-.02.026-.036.037-.056v-.018c.232-.428.45-.863.66-1.304.196-.407.393-.83.57-1.248v-.018c.023-.056.05-.11.074-.166.162-.388.315-.78.459-1.175.049-.133.082-.27.128-.404.09-.255.175-.512.257-.77.128-.401.257-.804.367-1.212.11-.405.202-.82.294-1.23.109-.481.21-.962.294-1.451v-.018c.069-.398.131-.791.184-1.194.012-.098.025-.195.036-.293.053-.448.095-.905.128-1.36.05-.691.09-1.387.092-2.092V32c0-1.86-.184-3.672-.514-5.435-.03-.159-.06-.32-.092-.478-.032-.16-.075-.318-.11-.477a29.243 29.243 0 0 0-1.708-5.306c-.062-.143-.136-.28-.202-.422-.093-.201-.18-.406-.275-.606-.018-.037-.038-.073-.055-.11v-.019a29.808 29.808 0 0 0-.587-1.138v-.018c-.197-.361-.414-.714-.625-1.065-.03-.05-.062-.098-.092-.147-.009-.004.01-.016 0-.018a29.57 29.57 0 0 0-.587-.918 29.368 29.368 0 0 0-1.616-2.222 29.615 29.615 0 0 0-1.725-1.946l-.055-.055-.037-.037c-.3-.31-.605-.604-.918-.9a29.581 29.581 0 0 0-2.901-2.423 29.204 29.204 0 0 0-2.02-1.359c-.009-.004-.01-.014-.018-.018a29.383 29.383 0 0 0-1.689-.936c-.43-.224-.862-.44-1.303-.643-.44-.202-.89-.389-1.34-.57-.013-.005-.025-.013-.038-.018a29.18 29.18 0 0 0-4.204-1.322l-.147-.036c-.176-.04-.355-.074-.533-.11a25.55 25.55 0 0 0-.77-.147 29.03 29.03 0 0 0-2.13-.312c-.477-.05-.968-.102-1.451-.13-.036 0-.074.003-.11 0h-.018a29.633 29.633 0 0 0-1.506-.036l.002.003Zm-1.946 2.717c.794.099 1.587.207 2.387.312 2.759.365 5.377.699 7.84.918a26.627 26.627 0 0 1 7.087 3.562c-2.03.134-4.192.186-6.481.092-3.055-.129-6.231-.482-9.4-.9-2.24-.295-4.354-.61-6.39-.863-1.605-.2-3.215-.359-4.829-.477a26.548 26.548 0 0 1 9.786-2.644Zm-10.538 6.188a75.78 75.78 0 0 1 6.352.367c2.168.209 4.356.496 6.573.79 3.137.414 6.1.8 8.85 1.01a81.603 81.603 0 0 0 10.318.128 26.888 26.888 0 0 1 2.093 2.588 52.214 52.214 0 0 1-3.488.515c-2.78.308-5.942.468-9.327.33-3.055-.129-6.231-.482-9.4-.9-2.24-.295-4.354-.61-6.39-.863a91.72 91.72 0 0 0-5.82-.55 68.51 68.51 0 0 0-3.764-.129 74.64 74.64 0 0 0-3.452.055c-.22.01-.412.026-.624.037a27.03 27.03 0 0 1 3.158-3.195 53.34 53.34 0 0 1 4.92-.184Zm0 7.032c2.054.023 4.184.158 6.352.367s4.356.496 6.573.79c3.137.414 6.1.8 8.85 1.009 3.04.236 5.901.27 8.482.202a105.54 105.54 0 0 0 6.39-.367c.339.715.66 1.437.936 2.185a51.46 51.46 0 0 1-6.885 1.23c-2.78.308-5.942.45-9.327.312-.509-.022-1.026-.041-1.542-.074-1.92-1.813-4.495-2.937-7.344-2.937-1.964 0-3.797.53-5.38 1.45-.507-.07-1.015-.138-1.524-.202a91.727 91.727 0 0 0-5.82-.55c-1.3-.081-2.557-.12-3.764-.129a74.64 74.64 0 0 0-3.452.055c-1.87.073-3.506.214-4.957.349a26.55 26.55 0 0 1 1.175-2.57 41.402 41.402 0 0 1 3.268-.606 53.815 53.815 0 0 1 7.969-.514Zm0 7.032c1.227.014 2.49.078 3.763.165a10.672 10.672 0 0 0-1.615 3.433 71.394 71.394 0 0 0-9.602-.257c-2.175.086-4.094.266-5.692.422-.362.036-.649.06-.973.092.067-.714.17-1.415.293-2.111a43.049 43.049 0 0 1 5.857-1.23 53.802 53.802 0 0 1 7.969-.514Zm38.813 1.799c.114.654.192 1.313.257 1.983-.395.116-.813.232-1.267.349a51.424 51.424 0 0 1-7.105 1.285 62.475 62.475 0 0 1-7.528.367 10.617 10.617 0 0 0-.826-3.562c2.826.197 5.497.211 7.913.147 2.581-.069 4.88-.231 6.794-.404.678-.061 1.2-.113 1.762-.165Zm-38.813 5.232c.59.008 1.195.047 1.799.074.081 1.264.381 2.455.863 3.562a81.05 81.05 0 0 0-2.901-.22 71.458 71.458 0 0 0-7.216-.074 96.67 96.67 0 0 0-5.691.404c-.299.03-.485.052-.716.073a26.69 26.69 0 0 1-.257-1.983c.077-.024.14-.05.22-.073a43.097 43.097 0 0 1 5.93-1.248 53.819 53.819 0 0 1 7.969-.515Zm39.107 1.763a26.57 26.57 0 0 1-.276 2.093c-.328.097-.661.2-1.028.294-1.931.497-4.325.958-7.105 1.267-2.78.309-5.942.45-9.327.312-.085-.007-.17-.014-.257-.018a10.647 10.647 0 0 0 1.707-3.489c2.648.172 5.157.226 7.436.165 2.581-.068 4.88-.25 6.794-.422.803-.072 1.41-.139 2.056-.202Zm-39.107 5.27a72.42 72.42 0 0 1 5.287.275 10.658 10.658 0 0 0 7.198 2.79c1.859 0 3.598-.47 5.122-1.303 1.435.172 2.829.32 4.168.422 3.04.236 5.901.253 8.482.184 2.581-.069 4.88-.231 6.794-.404l.403-.037c-.34.885-.746 1.734-1.175 2.57-1.622.36-3.483.685-5.581.919-2.78.308-5.942.45-9.327.312-3.055-.13-6.231-.482-9.4-.9-2.24-.296-4.354-.61-6.39-.863a91.102 91.102 0 0 0-5.82-.532c-1.3-.081-2.557-.139-3.764-.147a73.233 73.233 0 0 0-3.452.073 90.595 90.595 0 0 0-4.278.276 26.429 26.429 0 0 1-.936-2.204 43.463 43.463 0 0 1 4.7-.918 53.803 53.803 0 0 1 7.969-.514Zm0 7.031c2.054.024 4.184.158 6.352.368 2.168.209 4.356.514 6.573.808 3.137.414 6.1.781 8.85.99 3.04.237 5.901.272 8.482.203a84.873 84.873 0 0 0 2.92-.129 27.047 27.047 0 0 1-3.177 3.269c-2.61.255-5.52.347-8.629.22-3.055-.129-6.231-.464-9.4-.882-2.24-.295-4.354-.628-6.39-.88a91.513 91.513 0 0 0-5.82-.552 68.13 68.13 0 0 0-3.764-.11c-1.134-.008-2.22 0-3.25.037a26.814 26.814 0 0 1-2.093-2.608c.445-.076.9-.152 1.377-.22a53.763 53.763 0 0 1 7.969-.514Zm-1.836 7.05c.597-.015 1.216-.005 1.836 0 2.054.024 4.184.159 6.352.368s4.356.478 6.573.771c3.137.415 6.1.8 8.85 1.01.816.063 1.606.105 2.387.147a26.572 26.572 0 0 1-10.87 2.68c-.441-.055-.88-.107-1.322-.165-2.24-.295-4.353-.591-6.389-.844-.262-.033-.513-.062-.771-.092a26.604 26.604 0 0 1-7.803-3.838c.382-.018.762-.026 1.157-.036Z" /></svg>
            </div>
          </div>
          <div className="mainAreaTextContainer">
            <div className="heroHeaderText">
              <p className="headerText">Body Mass <br /> Index Calculator</p>
            </div>
            <div className="heroBodyText">
              <p className="pText">Better understand your weight in relation to your height using our body mass index (BMI) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
            </div>
          </div>
          { unitType === "metric" ? 
          <div className="metricInputFormContainer">
            <div className="metricInputFormHeader">
              <p className="metricInputFormHeaderText">Enter your details below</p>
            </div>
            <div className="metricInputOptions">
              <div className="metricOptionRadio">
                <input type="radio" name="measurementUnit" id="metricRadio" checked onClick={() => setUnitType("metric")} />
                <label className='radioButtonLabel' htmlFor='metricRadio'>Metric</label>
              </div>
              <div className="imperialOptionRadio">
                <input type="radio" name="measurementUnit" id="imperialRadio" onClick={() => setUnitType("imperial")} />
                <label className='radioButtonLabel' htmlFor='imperialRadio'>Imperial</label>
              </div>
            </div>
            <div className="metricInputFields">
              <div className="metricHeightInputField">
                <label className='metricInputFieldsLabel' htmlFor="heightInput">Height</label>
                <div className="metricInputContainer">
                  <input type="number" name="height" id="heightInput" autoComplete='off' placeholder='0' />
                  <p className="heightInputAfterText">cm</p>
                </div>
              </div>
              <div className="metricWeightInputField">
                <label className='metricInputFieldsLabel' htmlFor="weightInput">Weight</label>
                <div className="metricInputContainer">
                  <input type="number" name="weight" id="weightInput" autoComplete='off' placeholder='0' />
                  <p className="weightInputAfterText">kg</p>
                </div>
              </div>
            </div>
            <div className="outputContainer">
              <div className="bmiResult">
                <div className="textPreface">
                  <p>Your BMI is...</p>
                </div>
                <div className="resultNumber">
                  <p>23.4</p>
                </div>
              </div>
              <div className="textExpantiation">
                <p>Your BMI suggests you're a healthy weight. Your ideal weight is between <span className="idealWeight">63.3kgs - 85.2kgs</span></p>
              </div>
            </div>
          </div> : 
          <div className="imperialInputFormContainer">
            <div className="imperialInputFormHeader">
              <p className="imperialInputFormHeaderText">Enter your details below</p>
            </div>
            <div className="imperialInputOptions">
              <div className="metricOptionRadio">
                <input type="radio" name="measurementUnit" id="metricRadio" onClick={() => setUnitType("metric")} />
                <label htmlFor="metricRadio" className="radioButtonLabel">Metric</label>
              </div>
              <div className="imperialOptionRadio">
                <input type="radio" name="measurementUnit" id="imperialRadio" checked onClick={() => setUnitType("imperial")} />
                <label htmlFor="imperialRadio" className="radioButtonLabel">Imperial</label>
              </div>
            </div>
            <div className="imperialInputFields">
              <div className="imperialHeightInputFields">
                <label htmlFor="heightFeet" className="imperialInputFieldsLabel">Height</label>
                <div className="imperialHeightInputFieldsContainer">
                <div className="heightFeetInputContainer">
                  <input type="number" name="heightFeet" id="heightFeet" autoComplete='off' placeholder='0' />
                  <p className="heightFeetInputAfterText">ft</p>
                </div>
                <div className="heightInchesInputContainer">
                  <input type="number" name="heightInches" id="heightInches" autoComplete='off' placeholder='0' />
                  <p className="heightInchesInputAfterText">in</p>
                </div>
                </div>
              </div>
              <div className="imperialWeightInputFields">
                <label htmlFor="weightStone" className="imperialInputFieldsLabel">Weight</label>
                <div className="imperialWeightInputFieldsContainer">
                <div className="weightStoneInputContainer">
                  <input type="number" name="weightStone" id="weightStone" autoComplete='off' placeholder='0' />
                  <p className="weightStoneInputAfterText">st</p>
                </div>
                <div className="weightPoundsInputContainer">
                  <input type="number" name="weightPounds" id="weightPounds" autoComplete='off' placeholder='0' />
                  <p className="weightPoundsInputAfterText">lbs</p>
                </div>
                </div>
              </div>
            </div>
            <div className="outputContainer">
              <div className="bmiResult">
                <div className="textPreface">
                  <p>Your BMI is...</p>
                </div>
                <div className="resultNumber">
                  <p>23.4</p>
                </div>
              </div>
              <div className="textExpantiation">
                <p>Your BMI suggests you're a healthy weight. Your ideal weight is between <span className="idealWeight">9st 6lbs - 12st 10lbs.</span></p>
              </div>
            </div>
          </div>          
        }
        </div>
      </div>
      <div className="leadingLineContainer">
        <svg xmlns="http://www.w3.org/2000/svg" width="85.831" height="200.501" viewBox="0 0 85.831 200.501"><path fill="none" stroke="#ACC1DE" d="M82.719.092c7.831 41.7 2.31 140.08-82.43 200" /></svg>
      </div>
      <div className="secondSection">
        <div className="secondSectionImageContainer">
          <img src={image} alt="man eating" className="secondSectionMainImage" />
        </div>
        <div className="secondSectionTextAreaContainer">
          <div className="sSTAHeader">
            <p className="sSTAHText">What your BMI result means</p>
          </div>
          <div className="sSTABodyText">
            <p className="sSTABTParagraph">
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight'. Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim fot a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
            </p>
          </div>
        </div>
      </div>
      <div className="thirdSection">
        <div className="thirdSectionContainmentBox"></div>
        <div className="thirdSectionContentBox">
          <div className="thirdSectionSubsectionContentBox">
            <div className="iconContainer">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#F21E84" opacity=".15" /><path fill="#F21E84" d="M44 29.25h-1.279a10.75 10.75 0 0 0-21.442 0H20a.75.75 0 0 0-.75.75 12.794 12.794 0 0 0 7 11.383V42A1.75 1.75 0 0 0 28 43.75h8A1.75 1.75 0 0 0 37.75 42v-.617a12.793 12.793 0 0 0 7-11.383.75.75 0 0 0-.75-.75Zm-6.22-6.464c.363.29.703.608 1.019.95a10.737 10.737 0 0 0-6.444 5.514h-4.187A9.28 9.28 0 0 1 37 22.75c.26 0 .521.014.78.036Zm2.008 2.231a9.186 9.186 0 0 1 1.43 4.233H34.06a9.237 9.237 0 0 1 5.727-4.233ZM32 20.75a9.21 9.21 0 0 1 3.35.625 10.79 10.79 0 0 0-8.742 7.875h-3.826A9.261 9.261 0 0 1 32 20.75Zm4.688 19.48a.75.75 0 0 0-.438.683V42a.25.25 0 0 1-.25.25h-8a.25.25 0 0 1-.25-.25v-1.087a.75.75 0 0 0-.438-.683 11.294 11.294 0 0 1-6.537-9.48h22.45a11.294 11.294 0 0 1-6.538 9.48Z" /></svg>
            </div>
            <div className="healthyEatingTextContainer">
              <div className="textHeader">
                <p>Healthy eating</p>
              </div>
              <div className="textBody">
                <p>Healthy eating promotes weigth control, disease prevention, better digestion, immunity, mental clarity, and mood.</p>
              </div>
            </div>
          </div>
          <div className="thirdSectionSubsectionContentBox">
            <div className="iconContainer">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#F69134" opacity=".15" /><path fill="#F69134" d="M47 31.25h-1.25V27A1.75 1.75 0 0 0 44 25.25h-2.25V24A1.75 1.75 0 0 0 40 22.25h-3A1.75 1.75 0 0 0 35.25 24v7.25h-6.5V24A1.75 1.75 0 0 0 27 22.25h-3A1.75 1.75 0 0 0 22.25 24v1.25H20A1.75 1.75 0 0 0 18.25 27v4.25H17a.75.75 0 1 0 0 1.5h1.25V37A1.75 1.75 0 0 0 20 38.75h2.25V40A1.75 1.75 0 0 0 24 41.75h3A1.75 1.75 0 0 0 28.75 40v-7.25h6.5V40A1.75 1.75 0 0 0 37 41.75h3A1.75 1.75 0 0 0 41.75 40v-1.25H44A1.75 1.75 0 0 0 45.75 37v-4.25H47a.75.75 0 1 0 0-1.5Zm-27 6a.25.25 0 0 1-.25-.25V27a.25.25 0 0 1 .25-.25h2.25v10.5H20ZM27.25 40a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25V24a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v16Zm13 0a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25V24a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v16Zm4-3a.25.25 0 0 1-.25.25h-2.25v-10.5H44a.25.25 0 0 1 .25.25v10Z" /></svg>
            </div>
            <div className="exerciseTextContainer">
              <div className="textHeader">
                <p>Regular exercise</p>
              </div>
              <div className="textBody">
                <p>Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.</p>
              </div>
            </div>
          </div>
          <div className="thirdSectionSubsectionContentBox">
            <div className="iconContainer">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#22C1C1" opacity=".15" /><path fill="#22C1C1" d="M45.75 28a.75.75 0 0 1-.75.75h-2.25V31a.75.75 0 0 1-1.5 0v-2.25H39a.75.75 0 1 1 0-1.5h2.25V25a.75.75 0 1 1 1.5 0v2.25H45a.75.75 0 0 1 .75.75ZM34 22.75h1.25V24a.75.75 0 1 0 1.5 0v-1.25H38a.75.75 0 0 0 0-1.5h-1.25V20a.75.75 0 0 0-1.5 0v1.25H34a.75.75 0 1 0 0 1.5Zm8.906 12.535a.75.75 0 0 1 .134.75A11.751 11.751 0 1 1 27.97 20.96a.75.75 0 0 1 .992.849 11.262 11.262 0 0 0 13.23 13.229.75.75 0 0 1 .714.247Zm-1.796 1.418A12.765 12.765 0 0 1 27.297 22.89a10.248 10.248 0 0 0 1.526 18.849 10.25 10.25 0 0 0 12.287-5.036Z" /></svg>
            </div>
            <div className="sleepTextContainer">
              <div className="textHeader">
                <p>Adequate sleep</p>
              </div>
              <div className="textBody">
                <p>Sleep enhances mental clarity, emotional stability, and physical wellness, promoting restoration and rejuvenation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="limitationsSection">
        <div className="limitationsSectionContainer"></div>
        <div className="limitationsIntroText">
          <div className="limitationsHeader">
            <p>Limitations of BMI</p>
          </div>
          <div className="limitationsText">
            <p>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
          </div>
        </div>
        <div className="limitationsLeadingLine">
          <svg xmlns="http://www.w3.org/2000/svg" width="94.664" height="122.518" viewBox="0 0 94.664 122.518"><path fill="none" stroke="#ACC1DE" d="M94.498 122.046C65.99 112.032 7.28 73.613.498.046" /></svg>
        </div>
        <div className="limitationsCardsContainer">
        </div>
        <div className="limitationCard">
          <div className="cardHeader">
            <div className="genderIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="#F24E1E" d="M26 3.25h-5a.75.75 0 1 0 0 1.5h3.19l-3.75 3.742a7.75 7.75 0 1 0-6.19 13.22v2.538H11a.75.75 0 1 0 0 1.5h3.25V29a.75.75 0 1 0 1.5 0v-3.25H19a.75.75 0 1 0 0-1.5h-3.25v-2.538A7.75 7.75 0 0 0 21.41 9.65l3.84-3.84V9a.75.75 0 1 0 1.5 0V4a.75.75 0 0 0-.75-.75Zm-11 17A6.25 6.25 0 1 1 21.25 14 6.257 6.257 0 0 1 15 20.25Z" /></svg>
            </div>
            <p className='cardHeaderText'>Gender</p>
          </div>
          <div className="cardBody">
            <p className='cardBodyText'>The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>
          </div>
        </div>
        <div className="ageLimitationCard">
          <div className="ageCardHeader">
            <div className="ageIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="#22C1C1" d="M28.75 14A2.75 2.75 0 0 0 26 11.25h-9.25V9.675a3.756 3.756 0 0 0 3-3.675c0-3.362-3.198-5.534-3.334-5.625a.75.75 0 0 0-.832 0C15.448.466 12.25 2.638 12.25 6a3.756 3.756 0 0 0 3 3.675v1.575H6A2.75 2.75 0 0 0 3.25 14v2.916c0 1.066.352 2.1 1 2.947V25A2.75 2.75 0 0 0 7 27.75h18A2.75 2.75 0 0 0 27.75 25v-5.137a4.85 4.85 0 0 0 1-2.947V14Zm-15-8c0-1.925 1.5-3.426 2.25-4.055.75.625 2.25 2.125 2.25 4.055a2.25 2.25 0 0 1-4.5 0Zm-9 8A1.25 1.25 0 0 1 6 12.75h20A1.25 1.25 0 0 1 27.25 14v2.916c0 1.79-1.416 3.285-3.157 3.333A3.25 3.25 0 0 1 20.75 17a.75.75 0 1 0-1.5 0 3.25 3.25 0 1 1-6.5 0 .75.75 0 1 0-1.5 0 3.251 3.251 0 0 1-3.343 3.25c-1.74-.049-3.157-1.544-3.157-3.334V14ZM25 26.25H7A1.25 1.25 0 0 1 5.75 25v-3.836a4.6 4.6 0 0 0 2.117.586 4.726 4.726 0 0 0 3.446-1.345c.26-.254.49-.537.687-.843a4.75 4.75 0 0 0 8 0c.198.306.43.589.69.843A4.716 4.716 0 0 0 24 21.75h.134a4.6 4.6 0 0 0 2.116-.586V25A1.25 1.25 0 0 1 25 26.25Z" /></svg>
            </div>
            <p className="ageHeaderText">Age</p>
          </div>
          <div className="ageCardBody">
            <p>In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.</p>
          </div>
        </div>
        <div className="muscleLimitationCard">
          <div className="muscleCardHeader">
            <div className="muscleIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="#9747FF" d="M10.44 28h9.154C25.368 28 28 23.732 28 19.77a6.877 6.877 0 0 0-.68-2.677 6.836 6.836 0 0 0-1.678-2.188 7.96 7.96 0 0 0-5.336-2.216 7.924 7.924 0 0 0-3.752 1.188 7.99 7.99 0 0 0-2.73 2.852 932.84 932.84 0 0 1-1.615-3.254h1.697c.503-.031.98-.232 1.355-.57.376-.338.628-.793.715-1.292a2.707 2.707 0 0 0 .963-2.174c0-2.955-3.284-4.438-5.11-4.438-2.493-.059-3.216 1.763-3.863 3.393l-.028.073C7.534 9.509 4 18.748 4 21.554a6.558 6.558 0 0 0 1.844 4.588 6.25 6.25 0 0 0 4.596 1.856V28ZM9.43 9.06c.7-1.763 1.089-2.444 2.33-2.444h.055c1.195 0 3.52.996 3.52 2.824.021.184-.007.37-.082.539a1.5 1.5 0 0 0-.366-.35.76.76 0 0 0-.41-.139h-.426c-.415-.527-1.691-1.462-2.684-1.286l1.04 1.33h1.485l.215.516c.266.637.174.955.088 1.093a.447.447 0 0 1-.334.21H8.826l.495.65c.217.284.506.506.789.675.002.121.03.24.084.35l.222.447v.002c.47.948 1.56 3.144 2.145 4.316-.02.029-.04.059-.058.089l-2.32 3.793a.812.812 0 0 0 .264 1.11.797.797 0 0 0 1.103-.265l2.084-3.41a.999.999 0 0 0 .218.027c.082-.003.162-.016.24-.038l2.152 3.569a.803.803 0 0 0 1.101.271.806.806 0 0 0 .27-1.108l-2.376-3.94a1.659 1.659 0 0 0-.113-.163 6.328 6.328 0 0 1 2.142-2.399 6.272 6.272 0 0 1 3.037-1.027 6.353 6.353 0 0 1 4.249 1.784 5.31 5.31 0 0 1 1.843 3.684c-.001 3.293-2.105 6.616-6.803 6.616H10.44a4.692 4.692 0 0 1-3.454-1.372 4.917 4.917 0 0 1-1.381-3.445c0-2.13 2.764-9.758 3.826-12.509Z" /></svg>
            </div>
            <p className="muscleHeaderText">Muscle</p>
          </div>
          <div className="muscleCardBody">
            <p>BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.</p>
          </div>
        </div>
        <div className="pregnancyLimitationCard">
          <div className="pregnancyCardHeader">
            <div className="pregnancyIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="#FFC700" d="M11.5 17.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm9-2.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-1.4 5.615a5.875 5.875 0 0 1-6.2 0 .75.75 0 0 0-.8 1.27 7.375 7.375 0 0 0 7.8 0 .751.751 0 0 0-.8-1.27ZM28.75 16A12.75 12.75 0 1 1 16 3.25 12.765 12.765 0 0 1 28.75 16Zm-1.5 0A11.263 11.263 0 0 0 16.366 4.756C14.787 6.904 14.75 8.981 14.75 9a1.25 1.25 0 0 0 2.5 0 .75.75 0 1 1 1.5 0 2.75 2.75 0 1 1-5.5 0c0-.094.019-1.978 1.268-4.152A11.25 11.25 0 1 0 27.25 16Z" /></svg>
            </div>
            <p className="pregnancyHeaderText">Pregnancy</p>
          </div>
          <div className="pregnancyCardBody">
            <p>Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pragnancy BMI is advicable to minimise health risks to both mother and child.</p>
          </div>
        </div>
        <div className="raceLimitationCard">
          <div className="raceCardHeader">
            <div className="raceIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="#F21E84" d="M16 8.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Zm0-6a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Zm11.11 14.177-5.651-6.407a3.75 3.75 0 0 0-2.813-1.27h-5.292a3.75 3.75 0 0 0-2.813 1.269L4.89 16.927a2.25 2.25 0 0 0 3.168 3.198l2.638-2.116-2.266 8.606a2.25 2.25 0 0 0 4.094 1.868L16 22.5l3.476 5.989a2.25 2.25 0 0 0 4.094-1.868l-2.266-8.608 2.639 2.112a2.25 2.25 0 0 0 3.167-3.195v-.003Zm-1.079 2.103a.75.75 0 0 1-1.061 0 .523.523 0 0 0-.061-.055l-4.439-3.56a.75.75 0 0 0-1.195.775l2.859 10.866a.966.966 0 0 0 .046.125.75.75 0 1 1-1.36.634.542.542 0 0 0-.031-.06l-4.14-7.13a.75.75 0 0 0-1.298 0l-4.14 7.131a.534.534 0 0 0-.031.06.75.75 0 0 1-1.36-.633.954.954 0 0 0 .046-.125l2.859-10.867a.75.75 0 0 0-.316-.816.759.759 0 0 0-.409-.125.75.75 0 0 0-.47.165l-4.439 3.56a.523.523 0 0 0-.061.055.75.75 0 0 1-1.061-1.061L6 17.935l5.665-6.424a2.25 2.25 0 0 1 1.688-.761h5.292a2.25 2.25 0 0 1 1.688.761L26 17.935l.032.034a.748.748 0 0 1 0 1.061Z" /></svg>
            </div>
            <p className="raceHeaderText">Race</p>
          </div>
          <div className="raceCardBody">
            <p>Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;