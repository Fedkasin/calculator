angular.module("calculator", ['paper-config'])
.controller("culcCtrl", function(paperConfig) {
  var self = this;
  
  /**
   * Initialize local constants
   */
  self.paperConfig = paperConfig;
  
  self.selectedPrintFormat = self.paperConfig.formats.print[0];
  self.selectedPaperFormat = self.paperConfig.formats.paper[0];
  self.clientPaperWidth = 0;
  self.clientPaperHeight = 0;
  self.clientItemsQuantity = 0;
  self.selectedPaperType = self.paperConfig.types.single[0];
  self.selectedLamination = self.paperConfig.lamination.laminations[0];

  self.count = 1;
  self.price = 0;
  self.bendingQuantity = 0;
  
  function getInterpolationPrice(lowerPrice, higherPrice, lowerIndex, higherIndex, findingIndex) {
    return lowerPrice + ((findingIndex - lowerIndex)/(higherIndex - lowerIndex))*(higherPrice - lowerPrice);
  }
  
  function getCountByClientSize(height, width, itemsQuantity) {
    var verticalHoldingCapacity = Math.floor(312/(height + 2)) * Math.floor(440/(width + 2));
    var horizontalHoldingCapacity = Math.floor(440/(height + 2)) * Math.floor(312/(width + 2));
    if(verticalHoldingCapacity > horizontalHoldingCapacity) {
       return self.count = Math.ceil(self.paperConfig.a3Size / square);
      } else {
    return self.count = Math.floor(itemsQuantity / horizontalHoldingCapacity);
  }
}
  
  function getPriceByTypeSingleSide(count, type) {
    if(count <= 50) {
     switch(type) {
       case self.paperConfig.types.single[0]:
         return count * getInterpolationPrice(2.10, 1.38, 1, 50, count);
       case self.paperConfig.types.single[1]:
         return count * getInterpolationPrice(2.40, 1.28, 1, 50, count);
       case self.paperConfig.types.single[2]:
         return count * getInterpolationPrice(2.40, 1.36, 1, 50, count);
       case self.paperConfig.types.single[3]:
         return count * getInterpolationPrice(2.50, 1.41, 1, 50, count);
       case self.paperConfig.types.single[4]:
         return count * getInterpolationPrice(2.60, 1.47, 1, 50, count);
       case self.paperConfig.types.single[5]:
         return count * getInterpolationPrice(2.70, 1.56, 1, 50, count);
       case self.paperConfig.types.single[6]:
         return count * getInterpolationPrice(3.90, 2.43, 1, 50, count);
       case self.paperConfig.types.single[7]:
         return count * getInterpolationPrice(4.4, 2.86, 1, 50, count);
       case self.paperConfig.types.single[8]:
         return count * getInterpolationPrice(2.65, 1.43, 1, 50, count);
       case self.paperConfig.types.single[9]:
         return count * getInterpolationPrice(3.24, 1.80, 1, 50, count);
     }
    } else if(count <= 100) {
      switch(type) {
        case self.paperConfig.types.single[0]:
          return count * getInterpolationPrice(2.10, 0.99, 1, 100, count);
        case self.paperConfig.types.single[1]:
          return count * getInterpolationPrice(2.40, 1.14, 1, 100, count);
        case self.paperConfig.types.single[2]:
          return count * getInterpolationPrice(2.40, 1.21, 1, 100, count);
        case self.paperConfig.types.single[3]:
          return count * getInterpolationPrice(2.50, 1.25, 1, 100, count);
        case self.paperConfig.types.single[4]:
          return count * getInterpolationPrice(2.60, 1.30, 1, 100, count);
        case self.paperConfig.types.single[5]:
          return count * getInterpolationPrice(2.70, 1.39, 1, 100, count);
        case self.paperConfig.types.single[6]:
          return count * getInterpolationPrice(3.90, 2.16, 1, 100, count);
        case self.paperConfig.types.single[7]:
          return count * getInterpolationPrice(4.4, 2.54, 1, 100, count);
        case self.paperConfig.types.single[8]:
          return count * getInterpolationPrice(2.65, 1.27, 1, 100, count);
        case self.paperConfig.types.single[9]:
          return count * getInterpolationPrice(3.24, 1.59, 1, 100, count);
      }
    } else if(count <= 250) {
      switch(type) {
        case self.paperConfig.types.single[0]:
          return count * getInterpolationPrice(2.10, 0.87, 1, 250, count);
        case self.paperConfig.types.single[1]:
          return count * getInterpolationPrice(2.40, 0.99, 1, 250, count);
        case self.paperConfig.types.single[2]:
          return count * getInterpolationPrice(2.40, 1.05, 1, 250, count);
        case self.paperConfig.types.single[3]:
          return count * getInterpolationPrice(2.50, 1.10, 1, 250, count);
        case self.paperConfig.types.single[4]:
          return count * getInterpolationPrice(2.60, 1.14, 1, 250, count);
        case self.paperConfig.types.single[5]:
          return count * getInterpolationPrice(2.70, 1.22, 1, 250, count);
        case self.paperConfig.types.single[6]:
          return count * getInterpolationPrice(3.90, 1.89, 1, 250, count);
        case self.paperConfig.types.single[7]:
          return count * getInterpolationPrice(4.4, 2.22, 1, 250, count);
        case self.paperConfig.types.single[8]:
          return count * getInterpolationPrice(2.65, 1.12, 1, 250, count);
        case self.paperConfig.types.single[9]:
          return count * getInterpolationPrice(3.24, 1.39, 1, 250, count);
      }
    } else if(count <= 500) {
      switch(type) {
        case self.paperConfig.types.single[0]:
          return count * getInterpolationPrice(2.10, 0.58, 1, 500, count);
        case self.paperConfig.types.single[1]:
          return count * getInterpolationPrice(2.40, 0.66, 1, 500, count);
        case self.paperConfig.types.single[2]:
          return count * getInterpolationPrice(2.40, 0.70, 1, 500, count);
        case self.paperConfig.types.single[3]:
          return count * getInterpolationPrice(2.50, 0.73, 1, 500, count);
        case self.paperConfig.types.single[4]:
          return count * getInterpolationPrice(2.60, 0.76, 1, 500, count);
        case self.paperConfig.types.single[5]:
          return count * getInterpolationPrice(2.70, 0.81, 1, 500, count);
        case self.paperConfig.types.single[6]:
          return count * getInterpolationPrice(3.90, 1.26, 1, 500, count);
        case self.paperConfig.types.single[7]:
          return count * getInterpolationPrice(4.4, 1.48, 1, 500, count);
        case self.paperConfig.types.single[8]:
          return count * getInterpolationPrice(2.65, 7.46, 1, 500, count);
        case self.paperConfig.types.single[9]:
          return count * getInterpolationPrice(3.24, 0.93, 1, 500, count);
      }
    } else if(count <= 1000) {
      switch(type) {
        case self.paperConfig.types.single[0]:
          return count * getInterpolationPrice(2.10, 0.54, 1, 1000, count);
        case self.paperConfig.types.single[1]:
          return count * getInterpolationPrice(2.40, 0.62, 1, 1000, count);
        case self.paperConfig.types.single[2]:
          return count * getInterpolationPrice(2.40, 0.66, 1, 1000, count);
        case self.paperConfig.types.single[3]:
          return count * getInterpolationPrice(2.50, 0.68, 1, 1000, count);
        case self.paperConfig.types.single[4]:
          return count * getInterpolationPrice(2.60, 0.71, 1, 1000, count);
        case self.paperConfig.types.single[5]:
          return count * getInterpolationPrice(2.70, 0.81, 1, 1000, count);
        case self.paperConfig.types.single[6]:
          return count * getInterpolationPrice(3.90, 1.18, 1, 1000, count);
        case self.paperConfig.types.single[7]:
          return count * getInterpolationPrice(4.4, 1.39, 1, 1000, count);
        case self.paperConfig.types.single[8]:
          return count * getInterpolationPrice(2.65, 7.01, 1, 1000, count);
        case self.paperConfig.types.single[9]:
          return count * getInterpolationPrice(3.24, 0.87, 1, 1000, count);
      }
    } else if(count > 1000) {
      switch(type) {
        case self.paperConfig.types.single[0]:
          return count * getInterpolationPrice(2.10, 0.54, 1, count + 1, count);
        case self.paperConfig.types.single[1]:
          return count * getInterpolationPrice(2.40, 0.62, 1, count + 1, count);
        case self.paperConfig.types.single[2]:
          return count * getInterpolationPrice(2.40, 0.66, 1, count + 1, count);
        case self.paperConfig.types.single[3]:
          return count * getInterpolationPrice(2.50, 0.68, 1, count + 1, count);
        case self.paperConfig.types.single[4]:
          return count * getInterpolationPrice(2.60, 0.71, 1, count + 1, count);
        case self.paperConfig.types.single[5]:
          return count * getInterpolationPrice(2.70, 0.81, 1, count + 1, count);
        case self.paperConfig.types.single[6]:
          return count * getInterpolationPrice(3.90, 1.18, 1, count + 1, count);
        case self.paperConfig.types.single[7]:
          return count * getInterpolationPrice(4.4, 1.39, 1, count + 1, count);
        case self.paperConfig.types.single[8]:
          return count * getInterpolationPrice(2.65, 7.01, 1, count + 1, count);
        case self.paperConfig.types.single[9]:
          return count * getInterpolationPrice(3.24, 0.87, 1, count + 1, count);
      }
    }
  }
  
  function getPriceByTypeDoubleSide(count, type) {
    if(count <= 50) {
      switch(type) {
        case self.paperConfig.types.double[0]:
          return count * getInterpolationPrice(2.70, 1.38, 1, 50, count);
        case self.paperConfig.types.double[1]:
          return count * getInterpolationPrice(3.10, 1.95, 1, 50, count);
        case self.paperConfig.types.double[2]:
          return count * getInterpolationPrice(3.20, 1.68, 1, 50, count);
        case self.paperConfig.types.double[3]:
          return count * getInterpolationPrice(3.30, 1.70, 1, 50, count);
        case self.paperConfig.types.double[4]:
          return count * getInterpolationPrice(3.40, 1.77, 1, 50, count);
        case self.paperConfig.types.double[5]:
          return count * getInterpolationPrice(3.50, 1.81, 1, 50, count);
        case self.paperConfig.types.double[6]:
          return count * getInterpolationPrice(4.90, 2.98, 1, 50, count);
        case self.paperConfig.types.double[7]:
          return count * getInterpolationPrice(5.90, 3.21, 1, 50, count);
      }
    } else if(count <= 100) {
      switch(type) {
        case self.paperConfig.types.double[0]:
          return count * getInterpolationPrice(2.70, 1.22, 1, 100, count);
        case self.paperConfig.types.double[1]:
          return count * getInterpolationPrice(3.10, 1.44, 1, 100, count);
        case self.paperConfig.types.double[2]:
          return count * getInterpolationPrice(3.20, 1.49, 1, 100, count);
        case self.paperConfig.types.double[3]:
          return count * getInterpolationPrice(3.30, 1.51, 1, 100, count);
        case self.paperConfig.types.double[4]:
          return count * getInterpolationPrice(3.40, 1.58, 1, 100, count);
        case self.paperConfig.types.double[5]:
          return count * getInterpolationPrice(3.50, 1.61, 1, 100, count);
        case self.paperConfig.types.double[6]:
          return count * getInterpolationPrice(4.90, 2.64, 1, 100, count);
        case self.paperConfig.types.double[7]:
          return count * getInterpolationPrice(5.90, 2.85, 1, 100, count);
      }
    } else if(count <= 250) {
      switch(type) {
        case self.paperConfig.types.double[0]:
          return count * getInterpolationPrice(2.70, 1.07, 1, 250, count);
        case self.paperConfig.types.double[1]:
          return count * getInterpolationPrice(3.10, 1.26, 1, 250, count);
        case self.paperConfig.types.double[2]:
          return count * getInterpolationPrice(3.20, 1.29, 1, 250, count);
        case self.paperConfig.types.double[3]:
          return count * getInterpolationPrice(3.30, 1.32, 1, 250, count);
        case self.paperConfig.types.double[4]:
          return count * getInterpolationPrice(3.40, 1.38, 1, 250, count);
        case self.paperConfig.types.double[5]:
          return count * getInterpolationPrice(3.50, 1.41, 1, 250, count);
        case self.paperConfig.types.double[6]:
          return count * getInterpolationPrice(4.90, 2.31, 1, 250, count);
        case self.paperConfig.types.double[7]:
          return count * getInterpolationPrice(5.90, 2.49, 1, 250, count);
      }
    } else if(count <= 500) {
      switch(type) {
        case self.paperConfig.types.double[0]:
          return count * getInterpolationPrice(2.70, 0.87, 1, 500, count);
        case self.paperConfig.types.double[1]:
          return count * getInterpolationPrice(3.10, 1.02, 1, 500, count);
        case self.paperConfig.types.double[2]:
          return count * getInterpolationPrice(3.20, 1.05, 1, 500, count);
        case self.paperConfig.types.double[3]:
          return count * getInterpolationPrice(3.30, 1.05, 1, 500, count);
        case self.paperConfig.types.double[4]:
          return count * getInterpolationPrice(3.40, 1.11, 1, 500, count);
        case self.paperConfig.types.double[5]:
          return count * getInterpolationPrice(3.50, 1.14, 1, 500, count);
        case self.paperConfig.types.double[6]:
          return count * getInterpolationPrice(4.90, 1.86, 1, 500, count);
        case self.paperConfig.types.double[7]:
          return count * getInterpolationPrice(5.90, 2.01, 1, 500, count);
      }
    } else if(count <= 1000) {
      switch(type) {
        case self.paperConfig.types.double[0]:
          return count * getInterpolationPrice(2.70, 0.85, 1, 1000, count);
        case self.paperConfig.types.double[1]:
          return count * getInterpolationPrice(3.10, 0.99, 1, 1000, count);
        case self.paperConfig.types.double[2]:
          return count * getInterpolationPrice(3.20, 1.02, 1, 1000, count);
        case self.paperConfig.types.double[3]:
          return count * getInterpolationPrice(3.30, 1.02, 1, 1000, count);
        case self.paperConfig.types.double[4]:
          return count * getInterpolationPrice(3.40, 1.08, 1, 1000, count);
        case self.paperConfig.types.double[5]:
          return count * getInterpolationPrice(3.50, 1.11, 1, 1000, count);
        case self.paperConfig.types.double[6]:
          return count * getInterpolationPrice(4.90, 1.80, 1, 1000, count);
        case self.paperConfig.types.double[7]:
          return count * getInterpolationPrice(5.90, 1.95, 1, 1000, count);
      }
    } else if(count > 1000) {
      switch(type) {
        case self.paperConfig.types.double[0]:
          return count * getInterpolationPrice(2.70, 0.85, 1, count + 1, count);
        case self.paperConfig.types.double[1]:
          return count * getInterpolationPrice(3.10, 0.99, 1, count + 1, count);
        case self.paperConfig.types.double[2]:
          return count * getInterpolationPrice(3.20, 1.02, 1, count + 1, count);
        case self.paperConfig.types.double[3]:
          return count * getInterpolationPrice(3.30, 1.02, 1, count + 1, count);
        case self.paperConfig.types.double[4]:
          return count * getInterpolationPrice(3.40, 1.08, 1, count + 1, count);
        case self.paperConfig.types.double[5]:
          return count * getInterpolationPrice(3.50, 1.11, 1, count + 1, count);
        case self.paperConfig.types.double[6]:
          return count * getInterpolationPrice(4.90, 1.80, 1, count + 1, count);
        case self.paperConfig.types.double[7]:
          return count * getInterpolationPrice(5.90, 1.95, 1, count + 1, count);
      }
    }
  }

  function getLaminationPrice(count, lamin) {
      if(count <= 10) {
        switch(lamin) {
          case self.paperConfig.lamination.laminations[0]:
            return 0;
          case self.paperConfig.lamination.laminations[1]:
            return count * 1.80;
          case self.paperConfig.lamination.laminations[2]:
            return count * 2.70;
          case self.paperConfig.lamination.laminations[3]:
            return count * 3.60;
          case self.paperConfig.lamination.laminations[4]:
            return count * 1.80;
          case self.paperConfig.lamination.laminations[5]:
            return count * 2.70;
          case self.paperConfig.lamination.laminations[6]:
            return count * 3.60;
          case self.paperConfig.lamination.laminations[7]:
            return count * 3.80;
        }
       } else if(count <= 50) {
        switch(lamin) {
          case self.paperConfig.lamination.laminations[0]:
            return 0;
          case self.paperConfig.lamination.laminations[1]:
            return count * 1.70;
          case self.paperConfig.lamination.laminations[2]:
            return count * 2.00;
          case self.paperConfig.lamination.laminations[3]:
            return count * 3.00;
          case self.paperConfig.lamination.laminations[4]:
            return count * 1.70;
          case self.paperConfig.lamination.laminations[5]:
            return count * 2.00;
          case self.paperConfig.lamination.laminations[6]:
            return count * 3.00;
          case self.paperConfig.lamination.laminations[7]:
            return count * 3.20;
        }
      } else if(count <= 100) {
        switch(lamin) {
          case self.paperConfig.lamination.laminations[0]:
            return 0;
          case self.paperConfig.lamination.laminations[1]:
            return count * 1.00;
          case self.paperConfig.lamination.laminations[2]:
            return count * 1.70;
          case self.paperConfig.lamination.laminations[3]:
            return count * 2.40;
          case self.paperConfig.lamination.laminations[4]:
            return count * 1.00;
          case self.paperConfig.lamination.laminations[5]:
            return count * 1.70;
          case self.paperConfig.lamination.laminations[6]:
            return count * 2.40;
          case self.paperConfig.lamination.laminations[7]:
            return count * 2.50;
        }
      } else if(count > 100) {
        switch(lamin) {
          case self.paperConfig.lamination.laminations[0]:
            return 0;
          case self.paperConfig.lamination.laminations[1]:
            return count * 0.90;
          case self.paperConfig.lamination.laminations[2]:
            return count * 1.50;
          case self.paperConfig.lamination.laminations[3]:
            return count * 2.10;
          case self.paperConfig.lamination.laminations[4]:
            return count * 0.90;
          case self.paperConfig.lamination.laminations[5]:
            return count * 1.50;
          case self.paperConfig.lamination.laminations[6]:
            return count * 2.10;
          case self.paperConfig.lamination.laminations[7]:
            return count * 2.40;
        }
      }
  } 

  function getBendingPrice(count, bendingQuantity, price) {
    if(bendingQuantity === 0) {
      return 0;
    } else {
      if(count <= 1000) {
        return bendingQuantity*(price/100*5);
      } else {
        return bendingQuantity*(price/100*3);
      }
    }
  }
  
  function getFullPrice(count, paperType, printFormat, paperFormat, lamin, bendingQuantity) {
    if(printFormat === self.paperConfig.formats.print[0]) {
      switch(paperFormat) {
        case self.paperConfig.formats.paper[0]:
          return getPriceByTypeSingleSide(count, paperType) + getLaminationPrice(count, lamin) + getBendingPrice(count, bendingQuantity, getPriceByTypeSingleSide(count, paperType));
        case self.paperConfig.formats.paper[1]:
          return getPriceByTypeSingleSide(count / 2, paperType) + getLaminationPrice(count, lamin) + getBendingPrice(count, bendingQuantity, getPriceByTypeSingleSide(count, paperType));
        case self.paperConfig.formats.paper[2]:
          return getPriceByTypeSingleSide(count / 4, paperType) + getLaminationPrice(count, lamin) + getBendingPrice(count, bendingQuantity, getPriceByTypeSingleSide(count, paperType));
        case self.paperConfig.formats.paper[3]:
          return getPriceByTypeSingleSide(count / 8, paperType) + getLaminationPrice(count, lamin) + getBendingPrice(count, bendingQuantity, getPriceByTypeSingleSide(count, paperType));
        default:
          return getPriceByTypeSingleSide(Math.ceil(count / paperFormat), paperType) + getLaminationPrice(count, lamin) + getBendingPrice(count, bendingQuantity, getPriceByTypeSingleSide(count, paperType));
      }
    } else {
      switch(paperFormat) {
        case self.paperConfig.formats.paper[0]:
          return getPriceByTypeDoubleSide(count, paperType) + getLaminationPrice(count, lamin) + getBendingPrice(count, bendingQuantity, getPriceByTypeDoubleSide(count, paperType));
        case self.paperConfig.formats.paper[1]:
          return getPriceByTypeDoubleSide(count / 2, paperType) + getLaminationPrice(count, lamin) + getBendingPrice(count, bendingQuantity, getPriceByTypeDoubleSide(count, paperType));
        case self.paperConfig.formats.paper[2]:
          return getPriceByTypeDoubleSide(count / 4, paperType) + getLaminationPrice(count, lamin) + getBendingPrice(count, bendingQuantity, getPriceByTypeDoubleSide(count, paperType));
        case self.paperConfig.formats.paper[3]:
          return getPriceByTypeDoubleSide(count / 8, paperType) + getLaminationPrice(count, lamin) + getBendingPrice(count, bendingQuantity, getPriceByTypeDoubleSide(count, paperType));
        default:
          return getPriceByTypeDoubleSide(Math.ceil(count / paperFormat), paperType) + getLaminationPrice(count, lamin) + getBendingPrice(count, bendingQuantity, getPriceByTypeDoubleSide(count, paperType));
      }
    }
  }
  
  self.recalculate = function() {
    var fullPrice = 0;
    if(self.clientPaperHeight && self.clientPaperWidth) {
      fullPrice = getFullPrice(getCountByClientSize(self.clientPaperHeight, self.clientPaperWidth, self.clientItemsQuantity), self.selectedPaperType, self.selectedPrintFormat, self.selectedLamination, self.bendingQuantity);
      return self.price = parseFloat(fullPrice.toFixed(2));
    } else {
      fullPrice = getFullPrice(self.count, self.selectedPaperType, self.selectedPrintFormat, self.selectedPaperFormat, self.selectedLamination, self.bendingQuantity);
    }
    return self.price = parseFloat(fullPrice.toFixed(2));
  };
});