import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  filesData = [
    {
      id: 0,
      category: 'Image',
      subcategories: ['JPEG', 'PNG', 'GIF', 'HEIC', 'SVG'],
    },
    {
      id: 1,
      category: 'Document',
      subcategories: ['PDF', 'DOC', 'DOCX', 'XSLX', 'CSV'],
    },
    {
      id: 2,
      category: 'Audio',
      subcategories: ['MP3', 'WAV', 'M4A', 'OGG', 'FLAC'],
    },
    {
      id: 3,
      category: 'Video',
      subcategories: ['MP4', 'MOV', 'MKV', 'AVI', 'FLV'],
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
