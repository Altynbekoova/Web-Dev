import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable, switchMap } from 'rxjs';
import { Album } from '../../models/album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album$!: Observable<Album>;
  editedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.album$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.albumService.getAlbum(id);
      })
    );
  }

  saveChanges(album: Album): void {
    if (this.editedTitle && this.editedTitle !== album.title) {
      const updatedAlbum = { ...album, title: this.editedTitle };
      this.albumService.updateAlbum(updatedAlbum).subscribe({
        next: () => {
          alert('Album updated successfully!');
          this.editedTitle = '';
        },
        error: () => {
          alert('Failed to update album');
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}