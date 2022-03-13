function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kQwl6T8to/',modelReady);
}
function modelReady() {
    classifier.classify(gotResults);}