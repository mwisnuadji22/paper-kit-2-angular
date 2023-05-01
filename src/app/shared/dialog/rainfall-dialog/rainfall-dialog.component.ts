import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { FormModel } from 'app/shared/dialog/rainfall-dialog/interface/form.model';
import { v4 as uuidv4 } from 'uuid';
import { CilacapModel } from 'app/shared/fetch-api/model/cilacap.model';
import { CilacapService } from 'app/shared/fetch-api/services/cilacap.service';
import { TelajasariService } from 'app/shared/fetch-api/services/telajasari.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './rainfall-dialog.component.html',
  styleUrls: ['./rainfall-dialog.component.scss'],
})
export class RainfallDialogComponent implements OnInit {
  @Input() data: CilacapModel;
  @Input() dataT: CilacapModel;
  @Input() type: string;
  formGroup: FormGroup
  rainfall: CilacapModel;
  dataOptions = [
    {
      id: '1',
      name: 'January'
    },
    {
      id: '2',
      name: 'February'
    },
    {
      id: '3',
      name: 'March'
    },
    {
      id: '4',
      name: 'April'
    },
    {
      id: '5',
      name: 'May'
    },
    {
      id: '6',
      name: 'June'
    },
    {
      id: '7',
      name: 'July'
    },
    {
      id: '8',
      name: 'August'
    },
    {
      id: '9',
      name: 'September'
    },
    {
      id: '10',
      name: 'October'
    },
    {
      id: '11',
      name: 'November'
    },
    {
      id: '12',
      name: 'December'
    },
  ]
  constructor(
    public activeModal: NgbActiveModal,
    private cilacapService: CilacapService,
    private telajasariService: TelajasariService
  ) {}

  ngOnInit() {
    this.initForm();
    if (this.data || this.dataT) {
      this.setForm();
    }
  }

  initForm() {
    this.formGroup = new FormGroup({
      id: new FormControl(uuidv4()),
      no: new FormControl(),
      year: new FormControl(),
      month: new FormControl(),
      dewpoint_2m_temperature: new FormControl(),
      maximum_2m_air_temperature: new FormControl(),
      mean_2m_air_temperature: new FormControl(),
      minimum_2m_air_temperature: new FormControl(),
      total_precipitation: new FormControl(),
      u_component_of_wind_10m: new FormControl(),
      v_component_of_wind_10m: new FormControl()
    })
  }

  setForm() {
    if (this.dataT) {
      this.setFormDataTelajasari();
    } else {
      this.formGroup.get('id').setValue(this.data.id);
      this.formGroup.get('no').setValue(this.data.no);
      this.formGroup.get('year').setValue(this.data.year);
      this.formGroup.get('month').setValue(this.data.month);
      this.formGroup.get('dewpoint_2m_temperature').setValue(this.data.dewpoint_2m_temperature);
      this.formGroup.get('maximum_2m_air_temperature').setValue(this.data.maximum_2m_air_temperature);
      this.formGroup.get('mean_2m_air_temperature').setValue(this.data.mean_2m_air_temperature);
      this.formGroup.get('minimum_2m_air_temperature').setValue(this.data.minimum_2m_air_temperature);
      this.formGroup.get('total_precipitation').setValue(this.data.total_precipitation);
      this.formGroup.get('u_component_of_wind_10m').setValue(this.data.u_component_of_wind_10m);
      this.formGroup.get('v_component_of_wind_10m').setValue(this.data.v_component_of_wind_10m);
    }
  }

  setFormDataTelajasari() {
    this.formGroup.get('id').setValue(this.dataT.id);
    this.formGroup.get('no').setValue(this.dataT.no);
    this.formGroup.get('year').setValue(this.dataT.year);
    this.formGroup.get('month').setValue(this.dataT.month);
    this.formGroup.get('dewpoint_2m_temperature').setValue(this.dataT.dewpoint_2m_temperature);
    this.formGroup.get('maximum_2m_air_temperature').setValue(this.dataT.maximum_2m_air_temperature);
    this.formGroup.get('mean_2m_air_temperature').setValue(this.dataT.mean_2m_air_temperature);
    this.formGroup.get('minimum_2m_air_temperature').setValue(this.dataT.minimum_2m_air_temperature);
    this.formGroup.get('total_precipitation').setValue(this.dataT.total_precipitation);
    this.formGroup.get('u_component_of_wind_10m').setValue(this.dataT.u_component_of_wind_10m);
    this.formGroup.get('v_component_of_wind_10m').setValue(this.dataT.v_component_of_wind_10m);
  }

  save(value: FormModel): void {
    if (this.data) {
      this.updateRainfall(value)
    } else if (this.dataT) {
      this.updateTelajasari(value)
    } else {
      if (this.type) {
        this.addTelajasari(value)
      } else {
        this.addRainfall(value)
      }
    }
  }

  addTelajasari(payload: CilacapModel) {
    this.activeModal.close({ type: 'add', payload: payload})
  }

  addRainfall(payload: CilacapModel) {
    this.activeModal.close({ type: 'add', payload: payload})
  }

  updateTelajasari(payload: CilacapModel) {
    payload.no = this.dataT.no;
    this.telajasariService.updateTelajasari(payload)
      .subscribe({
        next: () => {
          window.location.reload();
        }
      })
    this.activeModal.close({ type: 'update', payload: payload})
    window.location.reload()
  }

  updateRainfall(payload: CilacapModel) {
    payload.no = this.data.no;
    this.cilacapService.updateCilacap(payload)
      .subscribe({
        next: () => {
          window.location.reload();
        }
      })
    this.activeModal.close({ type: 'update', payload: payload})
    window.location.reload()
  }
}
