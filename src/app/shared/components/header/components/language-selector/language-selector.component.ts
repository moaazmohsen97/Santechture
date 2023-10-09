import { keys } from './../../../../configs/localstorage-key';
import { TranslationService } from './../../../../services/i18n/translation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  currentLanguage: any;
  language: string = '';

  constructor(
    public translationService: TranslationService
  ) { }

  ngOnInit(): void {
    this.currentLanguage = window?.localStorage?.getItem(keys?.language);
    // this.changeLanguageText(this.currentLanguage);
  }

}
