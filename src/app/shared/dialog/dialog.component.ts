import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { Jam, RainfallModel } from 'app/shared/fetch-api/model/rainfall.model';
import { RainfallService } from 'app/shared/fetch-api/services/rainfall.service';
import { FormModel } from 'app/shared/dialog/interface/form.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{
  formGroup: FormGroup
  rainfall: RainfallModel;
  dataOptions = [
    {
      id: '1',
      name: 'Hulu'
    },
    {
      id: '2',
      name: 'Madiun'
    },
    {
      id: '3',
      name: 'Hilir'
    }
  ]
  constructor(
    public activeModal: NgbActiveModal,
    private rainfallService: RainfallService
  ) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      wilayah: new FormControl(),
      pos_id: new FormControl(),
      nama: new FormControl(),
      total: new FormControl(),
      jam1: new FormControl(),
      jam2: new FormControl(),
      jam3: new FormControl(),
      jam4: new FormControl(),
      rain: new FormControl()
    })
    this.formGroup.get('total').disable();
  }

  valueTotal(): string {
    const jam1 = this.formGroup.get('jam1').value;
    const jam2 = this.formGroup.get('jam2').value;
    const jam3 = this.formGroup.get('jam3').value;
    const jam4 = this.formGroup.get('jam4').value;
    const parse1 = jam1 ? +jam1 : 0;
    const parse2 = jam2 ? +jam2 : 0;
    const parse3 = jam3 ? +jam3 : 0;
    const parse4 = jam4 ? +jam4 : 0;
    const value = parse1 + parse2 + parse3 + parse4;
    this.formGroup.get('total').disable();
    return value.toString();
  }

  save(value: FormModel): void {
    this.formGroup.get('total').enable();
    const total = this.formGroup.get('total').value;
    let jam: Jam[] = [];
    jam.push({
      '1': value.jam1,
      '2': value.jam2,
      '3': value.jam3,
      '4': value.jam4
    });
    jam.push({
      '1': 'Data',
      '2': 'Data',
      '3': 'Data',
      '4': 'Data'
    });
    const payload: RainfallModel = {
      jam,
      rain: value.rain,
      total,
      pos: {
        pos_id: value.pos_id,
        nama: value.nama,
        wilayah: value.wilayah,
        tanggal: '22 Apr 2023 07:00:00 - 23 Apr 2023 06:59:00'
      }
    }
    this.rainfallService.addRainFall(payload)
      .subscribe({
        next: (res) => {
          console.log('success add ', res)
        }
      })
  }
}
