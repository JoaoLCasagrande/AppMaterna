/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audiobook-revista',
  templateUrl: './audiobook-revista.page.html',
  styleUrls: ['./audiobook-revista.page.scss'],
})
export class AudiobookRevistaPage implements OnInit {

  playAudio() {
    const audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;
    audioPlayer.play();
  }

  pauseAudio() {
    const audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;
    audioPlayer.pause();
  }

  constructor() { }

  ngOnInit() {
  }

}
