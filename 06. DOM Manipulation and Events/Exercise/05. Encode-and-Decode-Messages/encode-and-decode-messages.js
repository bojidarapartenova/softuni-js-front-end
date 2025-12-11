document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const encodeDivEl = document.getElementById('encode');
    const textareaEncode = encodeDivEl.getElementsByTagName('textarea')[0];
    const sendBtn = encodeDivEl.getElementsByTagName('button')[0];

    const decodeDivEl = document.getElementById('decode');
    const textareaDecode = decodeDivEl.getElementsByTagName('textarea')[0];
    const readBtn = decodeDivEl.getElementsByTagName('button')[0];

    sendBtn.addEventListener('click', handleEncodeMessage);
    readBtn.addEventListener('click', handleDecodeMessage);

    function handleEncodeMessage(e) {
        e.preventDefault();

        const messageToEncode = textareaEncode.value;
        let newMessage = "";

        for (let ch of messageToEncode) {
            newMessage += String.fromCharCode(ch.charCodeAt(0) + 1);
        }

        textareaDecode.value = newMessage;
        textareaEncode.value = "";
    }

    function handleDecodeMessage(e) {
        e.preventDefault();

        const messageToDecode = textareaDecode.value;
        let decodedMessage = "";

        for (let ch of messageToDecode) {
            decodedMessage += String.fromCharCode(ch.charCodeAt(0) - 1);
        }

        textareaDecode.value = decodedMessage;
    }
}