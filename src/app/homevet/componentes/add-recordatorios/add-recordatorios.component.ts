import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaService } from '../../services/consulta.service';
import { RecordatorioResponse } from '../../interfaces/recordatorio-response.interface';

@Component({
  selector: 'app-add-recordatorios',
  templateUrl: './add-recordatorios.component.html',
  styleUrls: ['./add-recordatorios.component.css']
})
export class AddRecordatoriosComponent implements OnInit {
  recordatorioForm: FormGroup;
  icons: string[] = [
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRklEQVR4nO2ZS24TQRCGP5mwACXQNYYFxBwDRO6BAMFBAqx5ZG2hIMQNQGEBEfcAhQMA2QQn3pJAtRqVGQWSgDwz3WO3hUsqydJI9v9VP6bqN8xjHvOIjgCngrCijgde2FDHRxWGKnwvc6iOrfLZ/VBwPUBn+sKFK96xpo5tL4Q6qY4vXngSCnqTF77IRe94rsJBXeEnQGT0Hethie5ExKtwR4W9WOF/AdlV4VZrwgOc9o4XqYX74+l4FmAhrfhLnPWOd62Ll8PctN9MWfna4sNgeCQbQZBgJZpumwQAwQ53lHh13G26DRIBBBVuNhJv15oKgwwAdsMiF2oD2D0fcxBTAfhf+bRe9Qt6sS+plAAq7IeC5TrVX4usWOoVCF54XK360Cn7lKwA1LFtTeN4AGElQbXaWIEQCq6NBShb4iwBVLg3fv8Lr3MF8I5XVVZgK1cAFT6MB0jUKrcEMKgCcJAxwP5/AbA321vIzfgh9sJGrgDe8XLWX2SrYwHMdMoVIHS5WrWZ+5wbgAqfKrt55pgl2bNp81El8akGmpSpdQeachXWpy3c/85+LfGjVThHocLXLIb6pYa+qQq3pw3wo+AGMWFe5RQB+sSGzaFNhpwEAG+Tmbwjc1fYbPGQhmP5JvQ4k0T8IQQsTOhm6ie31/8M8ypjLMd/pQo70Qe2zhVrdp+9YKKFO76Nqn4emYj4IyAFy+aYNemdrLfxwsPQ5fLEhZ8AgY6ZTubbmPVhg4dNdtaOlGmf35fPVq2rzOJv1nnMg9mPn4SVCOIFxHGFAAAAAElFTkSuQmCC', 
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACbUlEQVR4nO2ZzW4TQQzHR6E9wI3P2puUtwDBeyBA8CAtnPnouaqCEG9QBAeouEYwTtRKvYDaBwB6gTS50qwtDfI2IGiKsrsz2UxELPm0h/3/xjOz9n+Nmcc85uEdbtOcSSm5KYQPhfAVE+4zQZ8tplkS9IVwT5+JxQepvXLDOVObvvD3yTITrLGFAyF0RZItfGWCp2673qhe+Ae4zITP2cKgqPBTQAZssel2kouViBeL99hCz1f4KSCHQsmdiQl3u2aRLbwILVxGQPCZa5mFwOLxnBC+m7R4+ZUWt/SdgcSbxTLiXbf/V5aCaAWoRNlt4w1A2XZqeokXwvtlt0EIAMkqsXS7lHi91pigO20AtnDoWnipMIDe8z4HMVgFCB0TbhRb/e16w/cjFRYAjlynUS+w+rDm88LQAHIM8STf6jtT0z4lOgALB9o0jgUYdpUuNgAhdGln6fpYgGFLHCWAWFzNAQCvIwZ4macCexEDfBoLEKpVngQAE3TzAAwiBjj6LwB6M72FZNYPsaj1ESsA4easf8hWxgKo6RQrQNqGa/maOYIvsQEwwefcbp46ZoH2bLBkC49ziQ810AQVTwUHmqwKFpsRrf56IfFZFTqNC0z4PYqhfqekbyrt5O7UAdpwy/iEepXTAuAyW+dk6BxaZsgJAPA2mMmbmbsWtyZ1SGUk4Y3rNM4GEf8bomUWqriZ2MJ6cHv9z1Cv0sdy/Ldw/OZ9YAtesRv6gfEWTvAjW3V79Xwl4k+A1NUxK9M7aW/DFh85Wk4qFz4C4kxNTSf1bdT60MFDJ7vjH3hZ9oTg4/DZinaVUfxmncc8zOzHT38a1CJk4MDwAAAAAElFTkSuQmCC',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQUlEQVR4nO1ZTWsUQRB9+HFQEq2aNQdN/BlK/B+ioj8kH2cTPQeJBP9BRA8qXnNQ1qpNEAzxB6i56Ca5mvUyUp0gZgXt6e6d6cV5ULAwh32vqnq66g3QokWLeKzjNJRvQGgRws+g9BHKBxD+4cL9ph33TGgBUsyixCk0jh5fhdBDKO1CuawW9AXCDyDFTP3E309MQWkNwoPqxIdCeADhVehkpx7yynehvB9N/E8he+jx7dER38JZCD1JTlyHhdBjbOBMYvKXz0Po9cjJ66945f4zYeYrky/7ByciSMRGikoEtk0CAaU73FFQuhfaBkkEqItbgeQnOxDuNy5AeA9bE5dCsr8WcxATVqCE8qNq5O12jLykkgoQPkS3mK4gwMaDqIylrkAJ5WU/8jZk2ZySnQDadUPjP2FTZXy2RlGBEpvFdZ/2WcxWgPK8hwB+nq8AeupTgZ18BfC2zxnYz1aAcN+nhQYZCzj8DwTo2LcQjfkhFrNFchVA6+N+kc15CChmsxXQ61zzG+aEPmcnQPiTv5tnjlmakqeMJT/yiRaapCFVF5qjKqxmJGAFldG9UED4WxZLvYb6pu/4TvMCipuIgnmVTQmQkNYZhu2hAUtOtADhl+lMXjNazaus79C+QHfmHJLCslHHm0l4Jb29/jvMq4ywHP8SX+MPbJVXrNl9dsFEE6fvLutvLnI95E8IKaadYxYyO9lsI3wfbztX0DhsyDLTyXwbsz5s8bDN7ugD3uB4y/tw/GzOTZVZfGZt0QJjj59nXRCPiw6F2AAAAABJRU5ErkJggg=='
  ];
  selectedIcon!: string;

  constructor(
    public dialogRef: MatDialogRef<AddRecordatoriosComponent>,
    private fb: FormBuilder,
    private consultaService: ConsultaService 
  ) {
    this.recordatorioForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      description: [''],
      icon: ['']
    });
  }

  ngOnInit(): void {
    this.recordatorioForm.get('startTime')?.valueChanges.subscribe(value => {
      const formattedTime = this.formatTime(value);
      this.recordatorioForm.patchValue({ startTime: formattedTime }, { emitEvent: false });
    });
    this.recordatorioForm.get('endTime')?.valueChanges.subscribe(value => {
      const formattedTime = this.formatTime(value);
      this.recordatorioForm.patchValue({ endTime: formattedTime }, { emitEvent: false });
    });
  }

  formatTime(time: string): string {
    const [hour, minute] = time.split(':').map(Number);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute < 10 ? '0' + minute : minute} ${ampm}`;
  }

  selectIcon(icon: string): void {
    this.selectedIcon = icon;
    this.recordatorioForm.patchValue({ icon: this.selectedIcon });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.recordatorioForm.valid) {
      const { startTime, endTime, ...rest } = this.recordatorioForm.value;
      const formattedStartTime = this.formatTime(startTime);
      const formattedEndTime = this.formatTime(endTime);
      const time = `${formattedStartTime} - ${formattedEndTime}`;
      const recordatorioData: RecordatorioResponse = { ...rest, time };
      this.consultaService.addRecordatorio(recordatorioData).subscribe(
        (response: RecordatorioResponse) => {
          console.log('Recordatorio added:', response);
          this.dialogRef.close(response);
        },
        (error: any) => {
          console.error('Error adding recordatorio:', error);
        }
      );
    }
  }
}
