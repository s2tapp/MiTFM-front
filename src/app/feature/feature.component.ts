import { Component } from '@angular/core';

interface Technology {
  name: string;
  description: string;
  supportedLanguages: string[];
  supportedFormats: string[];
}

@Component({
  selector: 'app-features',
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {
  technologies: Technology[] = [
    {
      name: 'Whisper',
      description: 'Whisper es un potente modelo de reconocimiento de voz desarrollado por OpenAI. Es compatible con una amplia gama de idiomas y formatos de audio.',
      supportedLanguages: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Russian', 'Portuguese', 'Italian'],
      supportedFormats: ['wav', 'mp3', 'flac', 'ogg']
    },
    {
      name: 'Wav2Vec',
      description: 'Wav2Vec es una tecnología de reconocimiento de voz desarrollada por Meta AI.',
      supportedLanguages: ['English'],
      supportedFormats: ['wav']
    }
  ]
}
