angular.module("calculator", ['paper-config'])
.controller("culcCtrl", function(paperConfig) {
  var self = this;
  
  /**
   * Initialize local constants
   */
  self.paperConfig = paperConfig;

  self.products = self.paperConfig.products;
  self.selectedProduct = self.paperConfig.products.leaflets;

  self.selectedPrintFormat = self.paperConfig.formats.print[0];
  self.selectedPaperFormat = self.paperConfig.formats.paper[0];
  self.clientPaperWidth = 0;
  self.clientPaperHeight = 0;
  self.selectedPaperType = self.paperConfig.types.single[0];
  self.selectedLamination = self.paperConfig.lamination.laminations[0];

  self.count = 1;
  self.price = 0;
  self.bendingQuantity = 0;
  
  function getInterpolationPrice(lowerPrice, higherPrice, lowerIndex, higherIndex, findingIndex) {
    return lowerPrice + ((findingIndex - lowerIndex)/(higherIndex - lowerIndex))*(higherPrice - lowerPrice);
  }

  function getCountByClientSize(height, width, count) {
      var verticalHoldingCapacity = Math.floor(312/(height + 2)) * Math.floor(440/(width + 2));
      var horizontalHoldingCapacity = Math.floor(440/(height + 2)) * Math.floor(312/(width + 2));
      if(verticalHoldingCapacity > horizontalHoldingCapacity) {
          return Math.ceil(count / verticalHoldingCapacity);
      } else {
          return Math.ceil(count / horizontalHoldingCapacity);
      }
}
  
  function getPriceByTypeSingleSide(count, type) {
         if(count <= 25) {
          switch(type) {
              case self.paperConfig.types.single[0]:
                  return count * getInterpolationPrice(2.10, 1.35, 1, 25, count);
              case self.paperConfig.types.single[1]:
                  return count * getInterpolationPrice(2.40, 1.54, 1, 25, count);
              case self.paperConfig.types.single[2]:
                  return count * getInterpolationPrice(2.40, 1.64, 1, 25, count);
              case self.paperConfig.types.single[3]:
                  return count * getInterpolationPrice(2.50, 1.70, 1, 25, count);
              case self.paperConfig.types.single[4]:
                  return count * getInterpolationPrice(2.60, 1.76, 1, 25, count);
              case self.paperConfig.types.single[5]:
                  return count * getInterpolationPrice(2.70, 1.88, 1, 25, count);
              case self.paperConfig.types.single[6]:
                  return count * getInterpolationPrice(3.90, 2.90, 1, 25, count);
              case self.paperConfig.types.single[7]:
                  return count * getInterpolationPrice(4.4, 3.45, 1, 25, count);
              case self.paperConfig.types.single[8]:
                  return count * getInterpolationPrice(2.65, 1.73, 1, 25, count);
              case self.paperConfig.types.single[9]:
                  return count * getInterpolationPrice(3.24, 2.16, 1, 25, count);
          }
      } else if(count <= 50) {
     switch(type) {
       case self.paperConfig.types.single[0]:
         return count * getInterpolationPrice(1.35, 1.12, 25, 50, count);
       case self.paperConfig.types.single[1]:
         return count * getInterpolationPrice(1.54, 1.28, 25, 50, count);
       case self.paperConfig.types.single[2]:
         return count * getInterpolationPrice(1.64, 1.36, 25, 50, count);
       case self.paperConfig.types.single[3]:
         return count * getInterpolationPrice(1.70, 1.41, 25, 50, count);
       case self.paperConfig.types.single[4]:
         return count * getInterpolationPrice(1.76, 1.47, 25, 50, count);
       case self.paperConfig.types.single[5]:
         return count * getInterpolationPrice(1.88, 1.56, 25, 50, count);
       case self.paperConfig.types.single[6]:
         return count * getInterpolationPrice(2.90, 2.43, 25, 50, count);
       case self.paperConfig.types.single[7]:
         return count * getInterpolationPrice(3.45, 2.86, 25, 50, count);
       case self.paperConfig.types.single[8]:
         return count * getInterpolationPrice(1.73, 1.43, 25, 50, count);
       case self.paperConfig.types.single[9]:
         return count * getInterpolationPrice(2.16, 1.80, 25, 50, count);
     }
    } else if(count <= 100) {
      switch(type) {
        case self.paperConfig.types.single[0]:
          return count * getInterpolationPrice(1.12, 0.99, 50, 100, count);
        case self.paperConfig.types.single[1]:
          return count * getInterpolationPrice(1.28, 1.14, 50, 100, count);
        case self.paperConfig.types.single[2]:
          return count * getInterpolationPrice(1.36, 1.21, 50, 100, count);
        case self.paperConfig.types.single[3]:
          return count * getInterpolationPrice(1.41, 1.25, 50, 100, count);
        case self.paperConfig.types.single[4]:
          return count * getInterpolationPrice(1.47, 1.30, 50, 100, count);
        case self.paperConfig.types.single[5]:
          return count * getInterpolationPrice(1.56, 1.39, 50, 100, count);
        case self.paperConfig.types.single[6]:
          return count * getInterpolationPrice(2.43, 2.16, 50, 100, count);
        case self.paperConfig.types.single[7]:
          return count * getInterpolationPrice(2.86, 2.54, 50, 100, count);
        case self.paperConfig.types.single[8]:
          return count * getInterpolationPrice(1.43, 1.27, 50, 100, count);
        case self.paperConfig.types.single[9]:
          return count * getInterpolationPrice(1.80, 1.59, 50, 100, count);
      }
    } else if(count <= 250) {
      switch(type) {
        case self.paperConfig.types.single[0]:
          return count * getInterpolationPrice(0.99, 0.87, 100, 250, count);
        case self.paperConfig.types.single[1]:
          return count * getInterpolationPrice(1.14, 0.99, 100, 250, count);
        case self.paperConfig.types.single[2]:
          return count * getInterpolationPrice(1.21, 1.05, 100, 250, count);
        case self.paperConfig.types.single[3]:
          return count * getInterpolationPrice(1.25, 1.10, 100, 250, count);
        case self.paperConfig.types.single[4]:
          return count * getInterpolationPrice(1.30, 1.14, 100, 250, count);
        case self.paperConfig.types.single[5]:
          return count * getInterpolationPrice(1.39, 1.22, 100, 250, count);
        case self.paperConfig.types.single[6]:
          return count * getInterpolationPrice(2.16, 1.89, 100, 250, count);
        case self.paperConfig.types.single[7]:
          return count * getInterpolationPrice(2.54, 2.22, 100, 250, count);
        case self.paperConfig.types.single[8]:
          return count * getInterpolationPrice(1.27, 1.12, 100, 250, count);
        case self.paperConfig.types.single[9]:
          return count * getInterpolationPrice(1.59, 1.39, 100, 250, count);
      }
    } else if(count <= 500) {
      switch(type) {
        case self.paperConfig.types.single[0]:
          return count * getInterpolationPrice(0.87, 0.58, 250, 500, count);
        case self.paperConfig.types.single[1]:
          return count * getInterpolationPrice(0.99, 0.66, 250, 500, count);
        case self.paperConfig.types.single[2]:
          return count * getInterpolationPrice(1.05, 0.70, 250, 500, count);
        case self.paperConfig.types.single[3]:
          return count * getInterpolationPrice(1.10, 0.73, 250, 500, count);
        case self.paperConfig.types.single[4]:
          return count * getInterpolationPrice(1.14, 0.76, 250, 500, count);
        case self.paperConfig.types.single[5]:
          return count * getInterpolationPrice(1.22, 0.81, 250, 500, count);
        case self.paperConfig.types.single[6]:
          return count * getInterpolationPrice(1.89, 1.26, 250, 500, count);
        case self.paperConfig.types.single[7]:
          return count * getInterpolationPrice(2.22, 1.48, 250, 500, count);
        case self.paperConfig.types.single[8]:
          return count * getInterpolationPrice(1.12, 1.46, 250, 500, count);
        case self.paperConfig.types.single[9]:
          return count * getInterpolationPrice(1.39, 0.93, 250, 500, count);
      }
    } else if(count <= 1000) {
      switch(type) {
        case self.paperConfig.types.single[0]:
          return count * getInterpolationPrice(0.58, 0.54, 500, 1000, count);
        case self.paperConfig.types.single[1]:
          return count * getInterpolationPrice(0.66, 0.62, 500, 1000, count);
        case self.paperConfig.types.single[2]:
          return count * getInterpolationPrice(0.70, 0.66, 500, 1000, count);
        case self.paperConfig.types.single[3]:
          return count * getInterpolationPrice(0.73, 0.68, 500, 1000, count);
        case self.paperConfig.types.single[4]:
          return count * getInterpolationPrice(0.76, 0.71, 500, 1000, count);
        case self.paperConfig.types.single[5]:
          return count * getInterpolationPrice(0.81, 0.81, 500, 1000, count);
        case self.paperConfig.types.single[6]:
          return count * getInterpolationPrice(1.26, 1.18, 500, 1000, count);
        case self.paperConfig.types.single[7]:
          return count * getInterpolationPrice(1.48, 1.39, 500, 1000, count);
        case self.paperConfig.types.single[8]:
          return count * getInterpolationPrice(1.46, 1.01, 500, 1000, count);
        case self.paperConfig.types.single[9]:
          return count * getInterpolationPrice(0.93, 0.87, 500, 1000, count);
      }
    } else if(count > 1000) {
      switch(type) {
        case self.paperConfig.types.single[0]:
          return count * 0.54;
        case self.paperConfig.types.single[1]:
          return count * 0.62;
        case self.paperConfig.types.single[2]:
          return count * 0.66;
        case self.paperConfig.types.single[3]:
          return count * 0.68;
        case self.paperConfig.types.single[4]:
          return count * 0.71;
        case self.paperConfig.types.single[5]:
          return count * 0.81;
        case self.paperConfig.types.single[6]:
          return count * 1.18;
        case self.paperConfig.types.single[7]:
          return count * 1.39;
        case self.paperConfig.types.single[8]:
          return count * 1.01;
        case self.paperConfig.types.single[9]:
          return count * 0.87;
      }
    }
  }
  
  function getPriceByTypeDoubleSide(count, type) {
   if(count <= 25) {
          switch(type) {
              case self.paperConfig.types.double[0]:
                  return count * getInterpolationPrice(2.70, 1.66, 1, 25, count);
              case self.paperConfig.types.double[1]:
                  return count * getInterpolationPrice(3.10, 1.95, 1, 25, count);
              case self.paperConfig.types.double[2]:
                  return count * getInterpolationPrice(3.20, 2.01, 1, 25, count);
              case self.paperConfig.types.double[3]:
                  return count * getInterpolationPrice(3.30, 2.04, 1, 25, count);
              case self.paperConfig.types.double[4]:
                  return count * getInterpolationPrice(3.40, 2.13, 1, 25, count);
              case self.paperConfig.types.double[5]:
                  return count * getInterpolationPrice(3.50, 2.22, 1, 25, count);
              case self.paperConfig.types.double[6]:
                  return count * getInterpolationPrice(4.90, 3.58, 1, 25, count);
              case self.paperConfig.types.double[7]:
                  return count * getInterpolationPrice(5.90, 3.86, 1, 25, count);
          }
      } else if(count <= 50) {
      switch(type) {
        case self.paperConfig.types.double[0]:
          return count * getInterpolationPrice(1.66, 1.38, 25, 50, count);
        case self.paperConfig.types.double[1]:
          return count * getInterpolationPrice(1.95, 1.62, 25, 50, count);
        case self.paperConfig.types.double[2]:
          return count * getInterpolationPrice(2.01, 1.68, 25, 50, count);
        case self.paperConfig.types.double[3]:
          return count * getInterpolationPrice(2.04, 1.70, 25, 50, count);
        case self.paperConfig.types.double[4]:
          return count * getInterpolationPrice(2.13, 1.77, 25, 50, count);
        case self.paperConfig.types.double[5]:
          return count * getInterpolationPrice(2.22, 1.81, 25, 50, count);
        case self.paperConfig.types.double[6]:
          return count * getInterpolationPrice(3.58, 2.98, 25, 50, count);
        case self.paperConfig.types.double[7]:
          return count * getInterpolationPrice(3.86, 3.21, 25, 50, count);
      }
    } else if(count <= 100) {
      switch(type) {
        case self.paperConfig.types.double[0]:
          return count * getInterpolationPrice(1.38, 1.22, 50, 100, count);
        case self.paperConfig.types.double[1]:
          return count * getInterpolationPrice(1.62, 1.44, 50, 100, count);
        case self.paperConfig.types.double[2]:
          return count * getInterpolationPrice(1.68, 1.49, 50, 100, count);
        case self.paperConfig.types.double[3]:
          return count * getInterpolationPrice(1.70, 1.51, 50, 100, count);
        case self.paperConfig.types.double[4]:
          return count * getInterpolationPrice(1.77, 1.58, 50, 100, count);
        case self.paperConfig.types.double[5]:
          return count * getInterpolationPrice(1.81, 1.61, 50, 100, count);
        case self.paperConfig.types.double[6]:
          return count * getInterpolationPrice(2.98, 2.64, 50, 100, count);
        case self.paperConfig.types.double[7]:
          return count * getInterpolationPrice(3.21, 2.85, 50, 100, count);
      }
    } else if(count <= 250) {
      switch(type) {
        case self.paperConfig.types.double[0]:
          return count * getInterpolationPrice(1.22, 1.07, 100, 250, count);
        case self.paperConfig.types.double[1]:
          return count * getInterpolationPrice(1.44, 1.26, 100, 250, count);
        case self.paperConfig.types.double[2]:
          return count * getInterpolationPrice(1.49, 1.29, 100, 250, count);
        case self.paperConfig.types.double[3]:
          return count * getInterpolationPrice(1.51, 1.32, 100, 250, count);
        case self.paperConfig.types.double[4]:
          return count * getInterpolationPrice(1.58, 1.38, 100, 250, count);
        case self.paperConfig.types.double[5]:
          return count * getInterpolationPrice(1.61, 1.41, 100, 250, count);
        case self.paperConfig.types.double[6]:
          return count * getInterpolationPrice(2.64, 2.31, 100, 250, count);
        case self.paperConfig.types.double[7]:
          return count * getInterpolationPrice(2.85, 2.49, 100, 250, count);
      }
    } else if(count <= 500) {
      switch(type) {
        case self.paperConfig.types.double[0]:
          return count * getInterpolationPrice(1.07, 0.87, 250, 500, count);
        case self.paperConfig.types.double[1]:
          return count * getInterpolationPrice(1.26, 1.02, 250, 500, count);
        case self.paperConfig.types.double[2]:
          return count * getInterpolationPrice(1.29, 1.05, 250, 500, count);
        case self.paperConfig.types.double[3]:
          return count * getInterpolationPrice(1.32, 1.05, 250, 500, count);
        case self.paperConfig.types.double[4]:
          return count * getInterpolationPrice(1.38, 1.11, 250, 500, count);
        case self.paperConfig.types.double[5]:
          return count * getInterpolationPrice(1.41, 1.14, 250, 500, count);
        case self.paperConfig.types.double[6]:
          return count * getInterpolationPrice(2.31, 1.86, 250, 500, count);
        case self.paperConfig.types.double[7]:
          return count * getInterpolationPrice(2.49, 2.01, 250, 500, count);
      }
    } else if(count <= 1000) {
      switch(type) {
        case self.paperConfig.types.double[0]:
          return count * getInterpolationPrice(0.87, 0.85, 500, 1000, count);
        case self.paperConfig.types.double[1]:
          return count * getInterpolationPrice(1.02, 0.99, 500, 1000, count);
        case self.paperConfig.types.double[2]:
          return count * getInterpolationPrice(1.05, 1.02, 500, 1000, count);
        case self.paperConfig.types.double[3]:
          return count * getInterpolationPrice(1.05, 1.02, 500, 1000, count);
        case self.paperConfig.types.double[4]:
          return count * getInterpolationPrice(1.11, 1.08, 500, 1000, count);
        case self.paperConfig.types.double[5]:
          return count * getInterpolationPrice(1.14, 1.11, 500, 1000, count);
        case self.paperConfig.types.double[6]:
          return count * getInterpolationPrice(1.86, 1.80, 500, 1000, count);
        case self.paperConfig.types.double[7]:
          return count * getInterpolationPrice(2.01, 1.95, 500, 1000, count);
      }
    } else if(count > 1000) {
      switch(type) {
        case self.paperConfig.types.double[0]:
          return count * 0.85;
        case self.paperConfig.types.double[1]:
          return count * 0.99;
        case self.paperConfig.types.double[2]:
          return count * 1.02;
        case self.paperConfig.types.double[3]:
          return count * 1.02;
        case self.paperConfig.types.double[4]:
          return count * 1.08;
        case self.paperConfig.types.double[5]:
          return count * 1.11;
        case self.paperConfig.types.double[6]:
          return count * 1.80;
        case self.paperConfig.types.double[7]:
          return count * 1.95;
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
      var clientCount = getCountByClientSize(self.clientPaperHeight, self.clientPaperWidth, self.count);
      fullPrice = getFullPrice(clientCount, self.selectedPaperType, self.selectedPrintFormat, self.paperConfig.formats.paper[0], self.selectedLamination, self.bendingQuantity);
      return self.price = parseFloat(fullPrice.toFixed(2));
    } else {
      fullPrice = getFullPrice(self.count, self.selectedPaperType, self.selectedPrintFormat, self.selectedPaperFormat, self.selectedLamination, self.bendingQuantity);
    }
    return self.price = parseFloat(fullPrice.toFixed(2));
  };
});