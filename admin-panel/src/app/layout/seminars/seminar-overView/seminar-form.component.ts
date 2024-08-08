import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeminarService } from '@services/seminar/seminar.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seminar-overView',
  templateUrl: './seminar-form.component.html',
  styleUrls: ['./seminar-form.component.scss'],
})
export class SeminarOverViewComponent implements OnInit {
  submitted = false;
  overViewData: any;
  action: string = '';
  attempted: any;
  notAttempted: any;
  chartOptions: any;
  chartOptions2: any;
  setChart: any[] = [];
  seminarForm = this.formBuilder.group({
    _id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    college: new FormControl('', [Validators.required]),
    dateOfSeminar: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(
    private seminarService: SeminarService,
    private router: Router,
    private formBuilder: FormBuilder,
    private actRoutes: ActivatedRoute,
    private location: Location,
    private toastService: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.actRoutes.queryParams.subscribe((params) => {
      this.action = params.action;
      if (params.id) {
        this.getById(params.id);
      }
    });
  }

  get form() {
    return this.seminarForm.controls;
  }

  getById(id) {
    this.spinner.show();
    this.seminarService.getSeminarOverView(id).subscribe((success) => {
      this.spinner.hide();
      // this.seminarForm.patchValue(success.result);
      this.overViewData = success.result;
      console.log('your form data in seminar over', this.overViewData);
      this.attempted =
        (this.overViewData.avgNoOfAttemptedStudent /
          this.overViewData.NoOfStudent) *
        100;
      this.notAttempted =
        (this.overViewData.avgNoOfUnattemptedStudent /
          this.overViewData.NoOfStudent) *
        100;

      this.chartOptions2 = {
        series: [this.attempted, this.notAttempted],
        chart: {
          height: 200,
          type: 'pie',
        },
        title: {
          text: 'Participation ',
        },
        labels: ['Attempted', 'Not Attempted'],
      };

      this.chartOptions = {
        series: [
          Number(this.overViewData.avgPercentageOfFailStudent),
          Number(this.overViewData.avgPercentageOfPassStudent),
        ],
        chart: {
          height: 200,
          type: 'pie',
        },
        title: {
          text: 'RESULT',
        },
        labels: ['FAIL', 'PASS'],
      };

      this.overViewData.setsData = this.overViewData.setsData.map((data) => {
        var percentOfAttemptedStudent =
          Number(data.noOfAttemptedStudent / data.totalStudent) * 100;
        var percentOfUnattemptedStudent =
          Number(data.noOfUnattemptedStudent / data.totalStudent) * 100;
        var newData = {
          ...data,
          percentOfAttemptedStudent,
          percentOfUnattemptedStudent,
        };
        return newData;
      });

      // this.overViewData.setsData.forEach(element => {
      //   console.log("@@@@@@@@@pushing the Data",element)
      //   this.setChart.push(
      //     {
      //       series:[Number(element.percentageOfFailStudent),Number(element.percentageOfPassStudent)],
      //       chart: {
      //         height:200,
      //         type: 'pie'
      //       },
      //       title: {
      //         text: 'RESULT'
      //       },
      //       labels:["FAIL" ,"PASS"]
      //     }
      //   )

      //   console.log("your chRT",this.setChart)

      // });

      console.log('***********your Set data of chart*******', this.setChart);
    });
  }

  submit() {
    this.submitted = true;
    if (this.seminarForm.invalid) {
      this.toastService.warning('Please fill all required field!');
      return;
    }
    let formData = this.seminarForm.value;
    if (formData._id) {
      this.update(formData);
    } else {
      delete formData.id;
      this.create(formData);
    }
  }

  create(formData) {
    this.spinner.show();
    this.seminarService.addNewSeminar(formData).subscribe((success) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(['seminars/seminars']);
    });
  }

  update(formData) {
    this.spinner.show();
    this.seminarService
      .updateSeminar(formData._id, formData)
      .subscribe((success) => {
        this.submitted = false;
        this.spinner.hide();
        this.toastService.success(success.message);
        this.router.navigate(['seminars/seminars']);
      });
  }
}
