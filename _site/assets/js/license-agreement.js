window.onload = () => {
    var countrySelect = document.getElementById('signature-country');
    var country;
    var signatureType = document.getElementById('signature-type').innerText;
    var viewerLang = document.getElementById('viewer-language').innerText;
    var countryForm;
    class LicenseAgreement {
        constructor(signature, type, lang) {
            let validTypes = ['CLASignature', 'NDASignature'];
            let validLangs = ['en', 'hu'];
            let msgInvalid = 'Signature is not valid. Need help? Contact us.';
            if (signature.split(',')[0] === 'data:image/svg+xml;base64') {
                this.SVGSignatureData = signature;
                this.SignatureString = calcMD5(signature);
            }
            else {
                console.error('Invalid header in SVGSignatureData.');
                notice(msgInvalid);
            }
            if (validTypes.indexOf(type) > -1) {
                this.SignatureType = type;
            }
            else {
                console.error('Unexpected SignatureType.');
                notice(msgInvalid);
            }
            if (validLangs.indexOf(lang) > -1) {
                this.Language = lang;
            }
            else {
                console.error('Unexpected SignatureLanguage.');
                notice(msgInvalid);
            }
        }
        isValid() {
            var validity = true;
            if (this.City.length === 0) {
                validity = false;
                notice('Please provide a city.');
            }
            if (this.Country.length === 0) {
                validity = false;
                notice('Please select a country.');
            }
            if (this.Email.length === 0) {
                validity = false;
                notice('Please provide an e-mail address.');
            }
            if (this.FirstName.length === 0) {
                validity = false;
                notice('Please provide your first name.');
            }
            if (this.PostalCode.length === 0) {
                validity = false;
                notice('Please provide a postal code.');
            }
            if (this.StreetAddress.length === 0) {
                validity = false;
                notice('Please provide a street address.');
            }
            if (this.Surname.length === 0) {
                validity = false;
                notice('Please provide your surname.');
            }
            if (this.SignatureType === 'CLASignature' && this.GitHubUsername.length === 0) {
                validity = false;
                notice('Please provide your GitHub username.');
            }
            return validity;
        }
    }
    function loadFormLayout() {
        country = countrySelect.options[countrySelect.selectedIndex].value;
        Array.from(document.getElementsByClassName('signature-form')).forEach((form) => {
            form.hidden = true;
        });
        countryForm = document.getElementById(`signature-${country}`);
        if (!countryForm) {
            countryForm = document.getElementById(`signature-US`);
        }
        countryForm.hidden = false;
        if (signatureType === 'CLASignature') {
            document.getElementById('github-username-div').hidden = false;
        }
    }
    countrySelect.onchange = loadFormLayout;
    var canvas = document.getElementById('signature-pad');
    function resizeCanvas() {
        var ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext('2d').scale(ratio, ratio);
    }
    window.onresize = resizeCanvas;
    resizeCanvas();
    var signaturePad = new SignaturePad(canvas);
    document.getElementById('signature-clear').addEventListener('click', (e) => {
        e.preventDefault();
        signaturePad.clear();
    });
    document.getElementById('signature-save').addEventListener('click', (e) => {
        e.preventDefault();
        notice('');
        if (signaturePad.isEmpty()) {
            return alert('Please provide a signature first.');
        }
        var signature = signaturePad.toDataURL('image/svg+xml');
        var license = new LicenseAgreement(signature, signatureType, viewerLang);
        license.Country = countrySelect.options[countrySelect.selectedIndex].text;
        Array.from(countryForm.getElementsByTagName('input')).forEach((input) => {
            license[input.name] = input.value;
        });
        license.Email = document.getElementById('signature-email').value;
        license.GitHubUsername = document.getElementById('github-username').value;
        if (license.isValid()) {
            post(license);
            document.getElementById('signature-form').hidden = true;
            document.getElementById('please-wait').hidden = false;
        }
    });
    function post(license) {
        var xhr = new XMLHttpRequest;
        xhr.open('POST', 'https://makanaleu.azurewebsites.net/svg-signature-service', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                var runId = xhr.getResponseHeader('x-ms-workflow-run-id');
                let response = JSON.parse(xhr.response);
                console.log(xhr);
                console.log(xhr.getAllResponseHeaders());
                Array.from(document.getElementsByClassName('shaded-form')).forEach((form) => {
                    form.hidden = true;
                });
                if (response.SignatureString !== license.SignatureString) {
                    document.getElementById('msg-review-div').innerText = runId;
                    document.getElementById('msg-review').hidden = false;
                }
                console.log(runId);
                document.getElementById('msg-200').innerText = runId;
                document.getElementById('msg-200-div').hidden = false;
            }
        };
        xhr.send(JSON.stringify(license));
    }
    function notice(message) {
        var notice = document.getElementById('form-notice');
        notice.innerText = message;
    }
};
//# sourceMappingURL=license-agreement.js.map