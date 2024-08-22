import { Component, HostListener } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { StudentService } from '../services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterOutlet,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isNavbarFixed: boolean = false;
  isDropdownOpen = false;
  selectedOption: string = '';




  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 100) {
      this.isNavbarFixed = true;
    } else {
      this.isNavbarFixed = false;
    }
  }

  constructor(private router: Router, private studentService: StudentService) {}
  attemptTest() {
    this.router.navigate(['default/test']);
  }

  viewReport() {
    this.router.navigate(['default/report']);
  }
  logOut() {
    let activeSeminarId = localStorage.getItem('SeminarId');
    localStorage.removeItem('StudentId');
    localStorage.removeItem('token');
    this.router.navigate([`/login/${activeSeminarId}`]);
  }


  toggleDropdown(){
    this.isDropdownOpen = !this.isDropdownOpen;

  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!event.target.closest('.dropdown')) {
      this.isDropdownOpen = false;
    }
  }

  selectOption(option: string) {
    this.selectedOption = option; // Store the selected option
    console.log('Selected:', option); // Optionally log the selected option
    this.isDropdownOpen = false; // Close the dropdown
  }

 
  
}
