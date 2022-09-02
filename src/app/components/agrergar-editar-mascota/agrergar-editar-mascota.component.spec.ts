import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrergarEditarMascotaComponent } from './agrergar-editar-mascota.component';

describe('AgrergarEditarMascotaComponent', () => {
  let component: AgrergarEditarMascotaComponent;
  let fixture: ComponentFixture<AgrergarEditarMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgrergarEditarMascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrergarEditarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
