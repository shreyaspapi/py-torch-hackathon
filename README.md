<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repository and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/shreyaspapi/py-torch-hackathon">
    <img src="src/assets/clynica.png" alt="Logo" width="256">
  </a>
  <br />

  <!-- Badges -->

  <img src="https://img.shields.io/github/repo-size/shreyaspapi/py-torch-hackathon?style=for-the-badge" alt="GitHub repo size" height="25">
  <img src="https://img.shields.io/github/last-commit/shreyaspapi/py-torch-hackathon?style=for-the-badge" alt="GitHub last commit" height="25">
  <img src="https://img.shields.io/github/license/shreyaspapi/py-torch-hackathon?style=for-the-badge" alt="License" height="25">
  <br />
  <a href="https://www.linkedin.com/in/shreyaspapi/">
    <img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555" alt="LinkedIn" height="25">
  </a>
  <a href="https://twitter.com/spapinwar/">
    <img src="https://img.shields.io/twitter/follow/FerroRodolfo?label=Twitter&logo=twitter&style=for-the-badge" alt="Twitter" height="25">
  </a>

  <h3 align="center">Lung-Disease Prediction</h3>
  <p align="center">
    Changing healtcare industry.
    <br />
    <a href="https://youtu.be/h2Eb1Tmt3M8"><strong>View the demo »</strong></a>
    <br />
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Disease Prediction](https://img.youtube.com/vi/h2Eb1Tmt3M8/0.jpg)](https://www.youtube.com/watch?v=Y1DfFQbkmYM)

An intelligent platform to predict disease of chest x-rays.

This platform makes use of a machine learning algorithm capable of tracking and detecting diseases. Artificial Intelligence (AI) has emerged as one of the most disruptive forces behind digital transformation that is revolutionizing the way we live and work. This applies to the field of healthcare and medicine too, where AI is accelerating change and empowering physicians to achieve more

## Resources used in the project

- National Institutes of Health (NIH) chest x-ray dataset. This dataset is a publicly available and medically curated dataset.
  Technique

- State-of-the art DenseNet for image classification. DenseNet is an open-source deep learning algorithm with implementations available in Keras (using TensorFlow as a back-end). We also explored the PyTorch version of DenseNet.

- Class Activation Maps are used to understand model activation and visualize it.

### Motivation

Some facts:

- Two-thirds of the world's population lacks access to trained radiologists, even when imaging equipment is readily available.
- The lack of image interpretation by experts may lead to delayed diagnosis and could potentially increase morbidity or mortality rates for treatable diseases like pneumonia.
- Approx. 2.5 million people die from lung diseases.

### Built With

With a lot of love 💖, motivation to help others 💪🏼 and [Python](https://www.python.org/) 🐍, using:

- [Pytorch](https://pytorch.org) <img src="https://pytorch.org/assets/images/logo-icon.svg" width="15">
- [Google Colab](https://colab.research.google.com/) <img src="https://colab.research.google.com/img/favicon.ico" width="15"> (with its wonderful GPUs)
- A real-time [Flask](https://www.palletsprojects.com/p/flask/) and [Dash](https://plot.ly/dash/) integration (along with [Dash Bootstrap Components](https://dash-bootstrap-components.opensource.faculty.ai/)) <img src="https://emojis.slackmojis.com/emojis/images/1501021338/314/flask.png" width="15"> + <img src="https://images.plot.ly/logo/new-branding/plotly-logomark.png" width="15">
- A real-time database, of course, from [Firebase](https://firebase.google.com/) <img src="http://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_96dp.png" width="15">
- [Vercel](https://vercel.com) (hosting repository)
- [Angular 10](https://angular.io) <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="15">

Inspired by the CheXNet work done by Stanford University ML Group, we explore how we can build a deep learning model to predict diseases from chest x-ray images.

<!-- USAGE EXAMPLES -->

## Usage

### Data Exploration

We use a weakly labelled dataset that was released by the NIH. The dataset is described in this paper, and you can download it from [here](https://nihcc.app.box.com/v/ChestXray-NIHCC). It includes over 30,805 unique patients and 112,120 frontal-view X-ray images with 14 different pathology labels (e.g. atelectasis, pneumonia, etc.) mined from radiology reports using NLP methods such as keyword search and semantic data integration. The NIH-released data also has 983 hand-labelled images covering 8 pathologies, which can be considered as strong labels.

### Model Training

Deep neural networks are notoriously hard to train well, especially when the neural networks get deeper. We use the DenseNet-121 architecture with pre-trained weights from ImageNet as initialization parameters.

This allows us to both pass the gradient more efficiently and train a deeper model. This architecture alleviates the vanishing-gradient problem and enables feature map reuse, which makes it possible to train very deep neural networks.

<p align="center">
    <img src="https://msdnshared.blob.core.windows.net/media/2018/03/030718_0134_UsingMicros3.png" >
</p>

we used the AUROC score to measure the performance for the diseases by selecting the model with the lowest validation loss.

| Disease      | AUC Score |            Disease | AUC Score |
| ------------ | :-------: | -----------------: | --------: |
| Atelectasis  | 0.689804  |           Effusion |  0.769636 |
| Cardiomegaly | 0.699429  |      Consolidation |  0.725847 |
| Infiltration | 0.655084  |              Edema |  0.817075 |
| Mass         | 0.601279  |          Emphysema |  0.603675 |
| Nodule       | 0.571633  |           Fibrosis |  0.660121 |
| Pneumonia    | 0.634000  | Pleural_Thickening |  0.650140 |
| Pneumothorax | 0.677171  |             Hernia |  0.647572 |

<!-- ROADMAP -->

## Roadmap

- Develop phone application that can recognise the diseases
- Improve user interface for the angular web app
- Partner with doctors to build a real world chest x-ray database.
- **Test prototype with a Radiologist**

<!-- LICENSE -->

## License

Distributed under a GPLv3 License. See `LICENSE` for more information.
