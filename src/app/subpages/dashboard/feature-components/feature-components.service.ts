import { Injectable } from '@angular/core';

import { Feature } from './../../../models/feature.model';

@Injectable()
export class FeatureComponentsService {

    features: Array<Feature>;

    getFeatures() {
        return this.features;
    }

    updateFeatureState(featureToUpdate: Feature, state: boolean) {
        this.features.find(item => item.name === featureToUpdate.name).isEnabled = state;
    }
}
